import { createContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const GameContext = createContext()
export const Game = ({
    children
}) => {
    const [items, setItems] = useState([]);
    const price = items.reduce((a, b) => a + Number(b['game-price']), 0)
    const user = localStorage.getItem('user')
    const values = {
        items,
        setItems,
        price,
    }
    return (
        <GameContext.Provider value={values}>
            {children}
        </GameContext.Provider>
    )
}