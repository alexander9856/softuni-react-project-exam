import './Create.css'
export const Create = () => {
    return (
        <section className="createEditGame">
            <img src={require('../../images/[removal.ai]_tmp-641b8c4d4c23f_POLSYR.png')} />
            <form className="modifyGame">
                <div className="game-form-group">
                    <label for="game-title">Game Title:</label>
                    <input type="text" id="game-title" name="game-title" required />

                    <label for="game-category">Type:</label>
                    <input type="text" id="game-category" name="game-category" required />

                    <label for="game-imageUrl">Image:</label>
                    <input type="text" id="game-imageUrl" name="game-imageUrl" required />

                    <label for="game-suitable-for">Suitable for:</label>
                    <select id="game-suitable-for" name="game-suitable-for" required>
                        <option value="pc">PC</option>
                        <option value="xbox">Xbox</option>
                        <option value="playstation" selected>PlayStation</option>
                        <option value="mobile">Mobile</option>
                        <option value="all">All of the above</option>
                    </select>

                    <label for="game-price">Price:</label>
                    <input type="number" id="game-price" name="game-price" required />

                    <label for="game-description">Description</label>
                    <textarea name="game-description" id="game-description" cols="20" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <button className="submitGame" type="submit">Publish offer</button>
                </div>
            </form>
        </section>
    )
}