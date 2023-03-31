import './Catalog.css'
import { useState, useEffect } from 'react'

import { getAllGames } from '../../services/data'
import { CatalogItem } from './CatalogItem'
import { EmptyCatalog } from './EmptyCatalog'

export const Catalog = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        getAllGames()
            .then(res => {
                res = Object.values(res)
                setGames(res)
            })
    }, [])
    return (
        <section id="dashboard">
            {games.length > 0 && <h1>All listings</h1>}
            <div className="games">
                {games.length > 0 ? games.map(x => (<CatalogItem key={x._id} {...x} />)) : <EmptyCatalog />}
            </div>
        </section>
    )
}