import { Link } from 'react-router-dom';
import { useContext } from 'react'

export const EmptyProfile = () => {
    return (
        <div className="empty-profile">
            <h1>You haven't posted any games for sale yet</h1>
            <p>If you have a game for sale -  <Link to="/create">create offer</Link></p>
        </div>
    )
}