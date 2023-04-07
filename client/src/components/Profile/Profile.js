import './Profile.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { GameContext } from '../../contexts/GameContext'

import { getAllGames } from '../../services/data'
import { ProfileItem } from './ProfileItem'
import { EmptyProfile } from './EmptyProfile'


export const Profile = () => {
    const { username, userId } = useContext(AuthContext);
    const [games, setGames] = useState([])
    useEffect(() => {
        getAllGames()
            .then(res => setGames(res))
    }, [])
    const ownedGames = games.filter((game) => game?._ownerId === userId);
    return (
        <section id="profile">
            <div className="avatar">
                <img src={require('../../assets/removedbg.png')} alt="Avatar" />
                <h1 className="seller">{username}</h1>
            </div>


            {ownedGames.length > 0 ? <><h2 className="allGamesForSale">Published Games for Sale:</h2>
                <div className="added-items">
                    {ownedGames.map(x => <ProfileItem key={x._id} game={x} />)}
                </div></> : <EmptyProfile />}

        </section>
    )
}