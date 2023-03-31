import { createContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CartContext = createContext()
export const ShoppingCart = ({
    children
}) => {
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider value={items}>
            {children}
        </CartContext.Provider>
    )
}