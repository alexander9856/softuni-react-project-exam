import './Cart.css';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from './CartItem';
import { EmptyCart } from './EmptyCart';
export const Cart = () => {
    const { items } = useContext(CartContext)
    const { price } = useContext(CartContext)
    return (
        <section id="shoppingCart">
            {items.length > 0 ? <div className="cart">
                {items.map(x => (<CartItem key={x._id} game={x} />))}
                <div className="total">
                    <span>Total: </span>
                    <span className="total-price">${price}</span>
                </div>
                </div> : <EmptyCart />}
        </section>
    )
}