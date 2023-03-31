import { Link } from 'react-router-dom'
export const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <h1>Your cart is empty</h1>
             <Link to="/catalog">Back to browse</Link>
        </div>
    )
}