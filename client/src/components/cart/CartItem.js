import { useContext } from "react";
import { GameContext } from '../../contexts/GameContext'
export const CartItem = ({ game }) => {
    const { setItems } = useContext(GameContext);
    const removeFromCartHandler = (e) => {
        const confirmation = window.confirm(`Are you sure you want to remove ${game['game-title']} from cart?`)
        if(confirmation){
            setItems(state => state.filter(x => x._id !== game._id ))
        }
    }
    function capitalize(s) {
        if (s) {
            return s[0].toUpperCase() + s.slice(1);
        }
    }
    return (
        <div className="game-item">
            <img className='cartItemImg' src={game['game-imageUrl']} alt="Game 1" />
            <div className="game-details">
                <h2>{game['game-title']}</h2>
                <p>Suitable for : {capitalize(game['game-suitable'])}</p>
                <p className="price">Price: ${game['game-price']}</p>
            </div>
            <button onClick={removeFromCartHandler} className="remove-item"><i className="fa-solid fa-trash"></i>Remove</button>
        </div>
    )
}