import './Profile.css'

export const Profile = () => {
    return (
        <section id="profile">
            <div className="avatar">
            <img src={require('../../assets/removedbg.png')} alt="Avatar"/>
            </div>
            <div className="profile-info">
                <h1 className="seller">John Doe</h1>
                <p className="budget">Budget: $50</p>
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