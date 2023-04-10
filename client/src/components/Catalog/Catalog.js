import './Catalog.css'
import { useState, useEffect } from 'react'

import { getAllGames } from '../../services/data'
import { CatalogItem } from './CatalogItem'
import { EmptyCatalog } from './EmptyCatalog'
import { Search } from './Search'
import { NoMatches } from './NoMatches'

export const Catalog = () => {
    const [games, setGames] = useState([]);
    const [searchedGames, setSearchedGames] = useState([]);
    let [isSearched, setIsSearched] = useState(false)

    useEffect(() => {
        getAllGames()
            .then(res => {
                res = Object.values(res)
                setGames(res)
                searchedGames(res)
            })
    }, [])
    return (
        <>
            <Search setSearchedGames={setSearchedGames} games={games} setIsSearched={setIsSearched} isSearched={isSearched} />
            <section id="dashboard">
                {games.length > 0 && <h1><i className="fa-solid fa-gamepad"></i>All listings</h1>}
                <div className="games">
                    {(isSearched && searchedGames.length > 0) && searchedGames.map(x => (<CatalogItem key={x._id} {...x} />))}
                    {(isSearched && games.length > 0 && searchedGames.length == 0) && <NoMatches />}


                    {(!isSearched && games.length > 0) && games.map(x => (<CatalogItem key={x._id} {...x} />))}
                    {games.length == 0 && <EmptyCatalog />}
                </div>
            </section>
        </>
    )
}
