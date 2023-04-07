export const Search = ({ setSearchedGames, games }) => {
    const onSearchHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchedGame = formData.get('searchGame').toLowerCase();
        let filteredGames = [];
        if (searchedGame) {
            filteredGames = games.length > 0 && games.filter(x => {
                if (x['game-title'].toLowerCase().startsWith(searchedGame) || x['game-title'] == searchedGame) {
                    return x
                }
            })
            setSearchedGames(filteredGames)
        }
        else{
            setSearchedGames(games)
        }
    }
    return (
        <form id="search" onSubmit={onSearchHandler}>
            <input type="text" placeholder="Search Game" name="searchGame" />
            <button type="submit">Search</button>
        </form>
    )
}