import './Cart.css'
export const Cart = () => {
    return (
        <section classNameName="shoppingCart">
            <h2>Shopping Cart</h2>
            <div className="cart">
                <div className="item">
                    <img src="./mortal-kombat-11-ultimate-edition-ps4-30.jpg" alt="Game 1" />
                        <div className="item-details">
                            <h3>Game 1</h3>
                            <p>$50</p>
                            <button>Remove</button>
                        </div>
                </div>

                <div className="item">
                    <img src="game2.jpg" alt="Game 2" />
                        <div className="item-details">
                            <h3>Game 2</h3>
                            <p>$40</p>
                            <button>Remove</button>
                        </div>
                </div>

                <div className="item">
                    <img src="game3.jpg" alt="Game 3" />
                        <div className="item-details">
                            <h3>Game 3</h3>
                            <p>$60</p>
                            <button>Remove</button>
                        </div>
                </div>

                <div className="total">
                    <h3>Total:</h3>
                    <p>$150</p>
                    <button>Checkout</button>
                </div>
            </div>
        </section>
    )
}