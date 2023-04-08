import './Catalog.css'
import { useState, useEffect } from 'react'

import { getAllGames } from '../../services/data'
import { CatalogItem } from './CatalogItem'
import { EmptyCatalog } from './EmptyCatalog'
import { Search } from './Search'

export const Catalog = () => {
    const [games, setGames] = useState([]);
    const [searchedGames, setSearchedGames] = useState([]);
    let isGames = false;
    if (games.length > 0 || searchedGames.length > 0) isGames = true
    useEffect(() => {
        getAllGames()
            .then(res => {
                res = Object.values(res)
                setGames(res)
            })
    }, [])
    return (
        <>
            <Search setSearchedGames={setSearchedGames} games={games} />
            <section id="dashboard">
                {games.length > 0 && <h1><i class="fa-solid fa-gamepad"></i>All listings</h1>}
                <div className="games">
                    {isGames &&
                        searchedGames.length > 0
                        ?
                        searchedGames.map(x => (<CatalogItem key={x._id} {...x} />))
                        : games.map(x => (<CatalogItem key={x._id} {...x} />))}
                    {!isGames && <EmptyCatalog />}
                    {/* {searchedGames.length > 0 ? searchedGames.map(x => (<CatalogItem key={x._id} {...x} />)) : games.length > 0 ? games.map(x => (<CatalogItem key={x._id} {...x} />)) : <EmptyCatalog />} */}
                </div>
            </section>
        </>
    )
}