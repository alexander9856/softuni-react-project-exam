import './Profile.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
export const Profile = () => {
    const { username } = useContext(AuthContext)
    return (
        <section id="profile">
            <div className="avatar">
                <img src={require('../../assets/removedbg.png')} alt="Avatar" />
                <h1 className="seller">{username}</h1>
            </div>
            <h2 className="allGamesForSale">Published Games for Sale:</h2>
            <div className="added-items">
                <div className="added-game">
                    <img src={require('../../assets/mortal-kombat-11-ultimate-edition-ps4-30.jpg')} alt="Avatar" />
                    <h2>Mortal Kombat 11</h2>
                    <p>50$</p>
                    <Link to="/details.html" className="details">Details</Link>
                </div>
            </div>
        </section>
    )
}