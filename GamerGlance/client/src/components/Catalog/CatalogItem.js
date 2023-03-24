import { Link } from 'react-router-dom'

export const CatalogItem = (game) => {
    return (
        <div className="game">
            <img src={game['game-imageUrl']} />
            <h2>{game['game-description']}</h2>
            <p>{game['game-price']}$</p>
            <Link to={`/details/${game._id}`} className="details">Details</Link>
        </div>
    )
}