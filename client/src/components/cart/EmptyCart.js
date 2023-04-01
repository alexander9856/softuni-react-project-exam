import { Link } from 'react-router-dom'
export const EmptyCart = () => {
    return (
        <section id="empty-cart">
            <img className="emptyCartImg" src={require('../../assets/empty-cart.png')} alt="prazna kolichka" />
            <div className="instructions">
                <h2>Your cart is currently empty</h2>
                <Link to={'/catalog'} className="browse">Return to browse</Link>
            </div>
        </section>
    )
}