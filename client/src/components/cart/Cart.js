import './Cart.css';

import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext'
import { CartItem } from './CartItem';
import { EmptyCart } from './EmptyCart';
export const Cart = () => {
    const { items, price } = useContext(GameContext)
    return (
        <section id="shoppingCart">
            {items.length > 0 && <h1><i className="fa-solid fa-cart-shopping"></i>Shopping cart</h1>}
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