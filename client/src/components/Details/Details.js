import './Details.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getGamebyId } from '../../services/data';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext'
import { delGame } from '../../services/data'
import { GameContext } from '../../contexts/GameContext'


export const Details = () => {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const { isAuthenticated } = useContext(AuthContext);
    const { items, setItems } = useContext(GameContext);
    let isAdded = false
    if (items.find(x => x._id == gameId)) {
        isAdded = true
    }
    const userId = JSON.parse(localStorage.getItem('user'))?._id
    let ownerId = ''

    const [game, setGame] = useState({});
    useEffect(() => {
        getGamebyId(gameId)
            .then(res => {
                ownerId = res._ownerId
                setGame(res)
            })
    }, [gameId]);
    function capitalize(s) {
        if (s) {
            if (s == 'pc') {
                return s.toUpperCase()
            }
            if(s == 'all'){
                return 'All platforms'
            }
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
    const addToShoppingCart = (e, game) => {
        setItems(state => [...state, game])
    }

    return (
        <section id="details-page">
            <img src={game['game-imageUrl']} />
            <div className="game-properties">
                <h2 className="game-title">{capitalize(game['game-title'])}</h2>
                <p className="game-type">Type of game: {capitalize(game['game-type'])}</p>
                <p className="game-suitable">Suitable for: {capitalize(game['platform'])}</p>
                <p className="game-price">Price: {game['game-price']}$</p>
                <p className="game-description">Description: {game['game-description']}</p>
                {isAuthenticated && < div className="button-container">
                    {game._ownerId === userId ?
                        <>
                            <Link to={`/games/edit/${gameId}`} className="edit-button"><i className="fa-solid fa-pen-to-square"></i>Edit</Link>
                            <button onClick={deleteHandler} className="delete-button" ><i className="fa-solid fa-trash"></i>Delete</button>
                        </>
                        : isAdded ? <button className='added-to-cart'><i className="fa-solid fa-check"></i>Added to cart</button> : < button onClick={(e) => addToShoppingCart(e, game)} className="add-to-cart-button"><i className="fa-solid fa-cart-plus"></i>Add to cart</button>
                    }
                </div>}
            </div>
        </section >
    )
}