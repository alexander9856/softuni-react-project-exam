import './Create.css'
export const Create = () => {
    return (
        <section className="createEditGame">
            <img src={require('../../assets/[removal.ai]_tmp-641b8c4d4c23f_POLSYR.png')} />
            <form className="modifyGame">
                <div className="game-form-group">
                    <label htmlFor="game-title">Game Title:</label>
                    <input type="text" id="game-title" name="game-title" required />

                    <label htmlFor="game-type">Type:</label>
                    <input type="text" id="game-type" name="game-type" required />

                    <label htmlFor="game-imageUrl">Image:</label>
                    <input type="text" id="game-imageUrl" name="game-imageUrl" required />

                    <label htmlFor="game-suitable">Suitable for:</label>
                    <select id="game-suitable" name="game-suitable" required>
                        <option value="pc">PC</option>
                        <option value="xbox">Xbox</option>
                        <option value="playstation" selected>PlayStation</option>
                        <option value="mobile">Mobile</option>
                        <option value="all">All of the above</option>
                    </select>

                    <label htmlFor="game-price">Price:</label>
                    <input type="number" id="game-price" name="game-price" required />

                    <label htmlFor="game-description">Description</label>
                    <textarea name="game-description" id="game-description" cols="20" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <button className="submitGame" type="submit">Publish offer</button>
                </div>
            </form>
        </section>
    )
}