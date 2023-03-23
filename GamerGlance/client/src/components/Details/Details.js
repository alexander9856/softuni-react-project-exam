import './Details.css'
export const Details = () => {
    return (
        <section id="details-page">
            <img src={require('../../images/474082691.electronic-arts-ufc-3-xbox-one.jpg')} alt="Game Image" class="game-image" />
            <div className="game-properties">
                <h2 className="game-title">Ufc 3</h2>
                <p className="game-type">Type of game: Fighting</p>
                <p className="game-suitable">Suitable for: Xbox One</p>
                <p className="game-price">Price: 50$</p>
                <p className="game-description">Description: nai qkata igra bate naprao konara im pruska lesha</p>
                <div className="button-container">
                    {/* <!-- user and owner --> */}
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                    {/* <!-- user and not owner --> */}
                    <button className="buy-button">Buy</button>
                </div>
            </div>
        </section>
    )
}