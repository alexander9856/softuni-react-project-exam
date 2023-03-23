import './Catalog.css'
import { Link } from 'react-router-dom'
export const Catalog = () => {
    return (
        <section id="dashboard">
            <div className="games">
                <div className="game">
                    <img src={require('../../images/mortal-kombat-11-ultimate-edition-ps4-30.jpg')} />
                    <h2>Mortal Kombat 11</h2>
                    <p>50$</p>
                    <Link to="/details/:gameId" className="details">Details</Link>
                </div>
                <div className="game">
                    <img src={require('../../images/474082691.electronic-arts-ufc-3-xbox-one.jpg')} />
                    <h2>Ufc 3</h2>
                    <p>50$</p>
                    <Link to="/details/:gameId" className="details">Details</Link>
                </div>
                <div className="game">
                    <img src={require('../../images/51iHmEg6LFL.jpg')} />
                    <h2>Mortal Kombat X</h2>
                    <p>50$</p>
                    <Link to="/details/:gameId" className="details">Details</Link>
                </div>
                <div className="game">
                    <img src={require('../../images/download.jpg')} />
                    <h2>Alynx</h2>
                    <p>50$</p>
                    <Link to="/details/:gameId" className="details">Details</Link>
                </div>
            </div>
        </section>
    )
}