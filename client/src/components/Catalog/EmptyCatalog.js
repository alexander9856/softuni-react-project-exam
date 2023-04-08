import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export const EmptyCatalog = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        <div className="empty-catalog">
            <h1>We are sorry, but there are no games for sale yet.</h1>
            <p>If you have a game for sale - <Link to="/create">create offer</Link></p>
        </div>
    )
}