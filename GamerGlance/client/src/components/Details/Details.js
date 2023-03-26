import './Details.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getGamebyId } from '../../services/data';
import {Link} from 'react-router-dom'

export const Details = () => {
    // const navigate = useNavigate();
    const { gameId } = useParams();
    // console.log(gameId)
    // const user = useContext(UserContext);

    const [game, setGame] = useState({});
    useEffect(() => {
        getGamebyId(gameId)
            .then(res => {
                setGame(res)
            })
    }, [gameId]);
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
                    <button className="delete-button">Delete</button>
                    {/* <!-- user and not owner --> */}
                    <button className="buy-button">Buy</button>
                </div>
            </div>
        </section>
    )
}