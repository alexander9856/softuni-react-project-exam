import { Link } from 'react-router-dom';
export const EmptyCatalog = () => {
    return (
        <div className="empty-catalog">
            <h1>We are sorry, but there are no games for sale yet.</h1>
            <p>If you have a game for sale - <Link to="/create">create offer</Link></p>
        </div>
    )
}