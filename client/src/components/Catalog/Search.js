import { useForm } from 'react-hook-form'

export const Search = ({ setSearchedGames, games, setIsSearched, isSearched }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            "searchGame": "",
            "platform-search": "all-platforms",
        }
    })
    const onSearchHandler = (data) => {
        let filteredGames = games;
        if (isSearched == false) {
            setIsSearched(true)
        }

        const searchedGame = data.searchGame
        const platform = data['platform-search']
        if (games.length > 0) {
            if (searchedGame) {
                filteredGames = games.filter(x => {
                    if (x['game-title'].toLowerCase().startsWith(searchedGame) || x['game-title'] == searchedGame) {
                        return x
                    }
                })
            }
            if (platform) {
                if (platform !== 'all-platforms') {
                    filteredGames = filteredGames.filter(x => x.platform == platform)
                }
            }
        }
        setSearchedGames(filteredGames)


    }
    return (
        <form id="search" onSubmit={handleSubmit(onSearchHandler)}>
            <input
                type="text"
                placeholder="Search Game"
                name="searchGame"
                {...register("searchGame", {
                    required: false
                })}
            />
            <select
                id="platform-search"
                name="platform-search"
                {...register("platform-search", {
                    required: false
                })}
            >
                <option value="pc">PC</option>
                <option value="xbox">Xbox</option>
                <option value="playstation">PlayStation</option>
                <option value="mobile">Mobile</option>
                <option value="nintendo">Nintendo</option>
                <option value="all-platforms">All platforms</option>
            </select>
            <button type="submit" className="searchButton"><i className="fa-solid fa-magnifying-glass"></i>Search</button>
        </form>
    )
}