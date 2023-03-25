import './Create.css'
import { useState } from 'react';
import { createGame } from '../../services/data';
import { useNavigate } from 'react-router-dom'
export const Create = () => {
    const [suitableFor, setSuitableFor] = useState('pc');
    const navigate = useNavigate()
    // const onChangeHandler = (e) => {
    //     setSuitableFor(e.target.value)
    // }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // const data = {}
        // data.title = e.target['game-title'].value;
        // data.type = e.target['game-type'].value;
        // data.imageUrl = e.target['game-imageUrl'].value;
        // data.suitable = e.target['game-suitable'].value;
        // data.price = e.target['game-price'].value;
        // data.description = e.target['game-description'].value;
        
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData);
     
        try {
            const res = await createGame(data);
            console.log(res)
            navigate('/catalog')
                
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <section className="createEditGame">
            <img src={require('../../assets/[removal.ai]_tmp-641b8c4d4c23f_POLSYR.png')} />
            <form className="modifyGame" onSubmit={onSubmitHandler}>
                <div className="game-form-group">
                    <label htmlFor="game-title">Game Title:</label>
                    <input type="text" id="game-title" name="game-title" required />

                    <label htmlFor="game-type">Type:</label>
                    <input type="text" id="game-type" name="game-type" required />

                    <label htmlFor="game-imageUrl">Image:</label>
                    <input type="text" id="game-imageUrl" name="game-imageUrl" required />

                    <label htmlFor="game-suitable">Suitable for:</label>
                    <select id="game-suitable" name="game-suitable" value={suitableFor} onChange={(e) => setSuitableFor(e.target.value)} required>
                        <option value="pc">PC</option>
                        <option value="xbox">Xbox</option>
                        <option value="playstation">PlayStation</option>
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