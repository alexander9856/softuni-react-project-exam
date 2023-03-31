import { createContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const CartContext = createContext()
export const ShoppingCart = ({
    children
}) => {
    const [items, setItems] = useState([])
    const price = items.reduce((a, b) => a + Number(b['game-price']), 0)
    const values = {
        items,
        setItems,
        price
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}