import './Details.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getGamebyId } from '../../services/data';
import { Link } from 'react-router-dom';

import { delGame } from '../../services/data'


export const Details = () => {
    const navigate = useNavigate();
    const { gameId } = useParams();

    const [game, setGame] = useState({});
    useEffect(() => {
        getGamebyId(gameId)
            .then(res => {
                setGame(res)
            })
    }, [gameId]);

    const deleteHandler = async (e) => {
        try {
            await delGame(gameId)
            navigate('/catalog')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <section id="details-page">
            <img src={game['game-imageUrl']} />
            <div className="game-properties">
                <h2 className="game-title">{game['game-title']}</h2>
                <p className="game-type">Type of game: {game['game-type']}</p>
                <p className="game-suitable">Suitable for: {game['game-suitable']}</p>
                <p className="game-price">Price: {game['game-price']}$</p>
                <p className="game-description">Description: {game['game-description']}</p>
                <div className="button-container">
                    {/* <!-- user and owner --> */}
                    <Link to={`/games/edit/${gameId}`} className="edit-button">Edit</Link>
                    <button onClick={deleteHandler} className="delete-button" >Delete</button>
                    {/* <!-- user and not owner --> */}
                    <button className="buy-button">Buy</button>
                </div>
            </div>
        </section>
    )
}