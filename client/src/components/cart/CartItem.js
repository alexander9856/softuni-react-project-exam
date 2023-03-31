export const CartItem = ({game}) => {
    return (
        <div className="game-item">
            <img className='cartItemImg' src={game['game-imageUrl']} alt="Game 1" />
            <div className="game-details">
                <h2>{game['game-title']}</h2>
                <p>Suitable for : {game['game-suitable']}</p>
                <p className="price">Price: ${game['game-price']}</p>
            </div>
            <button className="remove-item">Remove</button>
        </div>
    )
}