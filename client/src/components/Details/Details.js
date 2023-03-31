import './Details.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getGamebyId } from '../../services/data';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext'
import { delGame } from '../../services/data'


export const Details = () => {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const { isAuthenticated } = useContext(AuthContext)
    const userId = JSON.parse(localStorage.getItem('user'))?._id
    let ownerId = ''

    const [game, setGame] = useState({});
    useEffect(() => {
        getGamebyId(gameId)
            .then(res => {
                setGame(res)
            })
    }, [gameId]);
    function capitalize(s) {
        if (s) {
            return s[0].toUpperCase() + s.slice(1);
        }
    }
    const deleteHandler = async (e) => {
        try {
            const confirmation = window.confirm('Are you sure you want to delete this game from sales?');
            if (confirmation) {
                await delGame(gameId)
                navigate('/catalog')
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <section id="details-page">
            <img src={game['game-imageUrl']} />
            <div className="game-properties">
                <h2 className="game-title">{capitalize(game['game-title'])}</h2>
                <p className="game-type">Type of game: {capitalize(game['game-type'])}</p>
                <p className="game-suitable">Suitable for: {capitalize(game['game-suitable'])}</p>
                <p className="game-price">Price: {game['game-price']}$</p>
                <p className="game-description">Description: {game['game-description']}</p>
                {isAuthenticated && < div className="button-container">
                    {/* <!-- user and owner --> */}
                    {game.ownerId == userId &&
                        <>
                            <Link to={`/games/edit/${gameId}`} className="edit-button">Edit</Link>
                            <button onClick={deleteHandler} className="delete-button" >Delete</button>
                        </>}


                    {/* <!-- user and not owner --> */}
                    {game.ownerId !== userId && < button className="add-to-cart-button">Add to cart</button>}
                </div>}
            </div>
        </section >
    )
}