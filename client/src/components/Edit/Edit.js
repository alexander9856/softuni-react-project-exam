import './Edit.css'

import { useNavigate, useParams, Link } from 'react-router-dom';
import { getGamebyId } from '../../services/data';
import { useState, useEffect } from 'react';

import { updateGame } from '../../services/data'
export const Edit = () => {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [values, setValues] = useState({
        "game-title": "",
        "game-type": "",
        "game-imageUrl": "",
        "game-suitable": "",
        "game-price": "",
        "game-description": ""
    })
    useEffect(() => {
        getGamebyId(gameId)
            .then(res => setValues(res))
    }, [gameId])


    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData);

        try {
            await updateGame(gameId, data);
            navigate(`/games/details/${gameId}`)
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
                    <input type="text" id="game-title" name="game-title" value={values['game-title']} onChange={onChangeHandler} required />

                    <label htmlFor="game-type">Type:</label>
                    <input type="text" id="game-type" name="game-type" value={values['game-type']} onChange={onChangeHandler} required />

                    <label htmlFor="game-imageUrl">Image:</label>
                    <input type="text" id="game-imageUrl" name="game-imageUrl" value={values['game-imageUrl']} onChange={onChangeHandler} required />

                    <label htmlFor="game-suitable">Suitable for:</label>
                    <select id="game-suitable" name="game-suitable" value={values['game-suitable']} onChange={onChangeHandler} required>
                        <option value="pc">PC</option>
                        <option value="xbox">Xbox</option>
                        <option value="playstation">PlayStation</option>
                        <option value="mobile">Mobile</option>
                        <option value="all">All of the above</option>
                    </select>

                    <label htmlFor="game-price">Price:</label>
                    <input type="number" id="game-price" name="game-price" value={values['game-price']} onChange={onChangeHandler} required />

                    <label htmlFor="game-description">Description</label>
                    <textarea name="game-description" id="game-description" value={values['game-description']} onChange={onChangeHandler} cols="20" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <button className="submitGame" type="submit">Edit game</button>
                </div>
            </form>
        </section>
    )
}