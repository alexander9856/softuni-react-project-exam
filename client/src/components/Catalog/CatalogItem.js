import { Link } from 'react-router-dom'

export const CatalogItem = (game) => {
    return (
        <div className="game">
            <img src={game['game-imageUrl']} />
            <h2>{game['game-title']}</h2>
            <p>Price: {game['game-price']}$</p>
            <Link to={`/games/details/${game._id}`} className="details">Details</Link>
        </div>
    )
}