import './Profile.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
export const Profile = () => {
    const { username } = useContext(AuthContext)
    return (
        <section id="profile">
            <div className="avatar">
                <img src={require('../../assets/removedbg.png')} alt="Avatar" />
            </div>
            <div className="profile-info">
                <h1 className="seller">{username}</h1>
                <h2 className="allGamesForSale">Published Games for Sale:</h2>
                <ul>
                    <li>Mortal Kombat 11</li>
                    <li>Mortal Kombat 10</li>
                    <li>UFC 3</li>
                </ul>
            </div>
        </section>
    )
}