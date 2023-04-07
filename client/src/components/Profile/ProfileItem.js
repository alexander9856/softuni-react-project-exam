import { Link } from 'react-router-dom'
export const ProfileItem = ({ game }) => {
    return (
        <div className="added-game">
            <img src={game['game-imageUrl']} alt="Avatar" />
            <h2>{game['game-title']}</h2>
            <p>{game['game-price']}$</p>
            <Link to={`/games/details/${game._id}`} className="details">Details</Link>
        </div>
    )
}