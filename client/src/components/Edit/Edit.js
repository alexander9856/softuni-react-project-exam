import './Edit.css'

import { useNavigate, useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';

import { getGamebyId } from '../../services/data';

import { updateGame } from '../../services/data'
export const Edit = () => {
    const [game, setGame] = useState({})
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            "game-title": "",
            "game-type": "",
            "game-imageUrl": "",
            "platform": "",
            "game-price": "",
            "game-description": ""
        }
    });

    const navigate = useNavigate();

    const { gameId } = useParams();

    useEffect(() => {
        getGamebyId(gameId)
            .then(res => {
                setGame(res);
                setValue('game-title', res['game-title'])
                setValue('game-type', res['game-type'])
                setValue('game-imageUrl', res['game-imageUrl'])
                setValue('platform', res['platform'])
                setValue('game-price', res['game-price'])
                setValue('game-description', res['game-description'])

            })
    }, [gameId])


    // const onChangeHandler = (e) => {
    //     setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    // }
    const onSubmitHandler = async (data) => {
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
            <form className="modifyGame" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="game-form-group">
                    <label htmlFor="game-title">Game Title:</label>
                    <input
                        type="text"
                        id="game-title"
                        name="game-title"
                        // value={values['game-title']}
                        // onChange={onChangeHandler}
                        {...register("game-title", {
                            required: "Title is required",
                            minLength: {
                                value: 2,
                                message: "Title must be at least 2 characters long",
                            },
                        })}
                    />
                    <p className='wrongInputCreate'>{errors['game-title']?.message}</p>



                    <label htmlFor="game-type">Type:</label>
                    <input
                        type="text"
                        id="game-type"
                        name="game-type"
                        {...register("game-type", {
                            required: "Type is required",
                            minLength: {
                                value: 2,
                                message: "Type must be at least 2 characters long",
                            },
                        })}
                    // value={values['game-type']}
                    // onChange={onChangeHandler}
                    />
                    <p className='wrongInputCreate'>{errors['game-type']?.message}</p>


                    <label htmlFor="game-imageUrl">Image:</label>
                    <input
                        type="text"
                        id="game-imageUrl"
                        name="game-imageUrl"
                        {...register("game-imageUrl", {
                            required: "Image is required",
                            pattern: {
                                value: /^https?:\/\//,
                                message: "Image url must start with https:// or http://"
                            }
                        })}
                    />
                    <p className='wrongInputCreate'>{errors['game-imageUrl']?.message}</p>
                    


                    <label htmlFor="platform">Suitable for:</label>
                    <select id="platform" name="platform" {...register("platform", {})} >
                        <option value="pc">PC</option>
                        <option value="xbox">Xbox</option>
                        <option value="playstation">PlayStation</option>
                        <option value="nintendo">Nintendo</option>
                        <option value="mobile">Mobile</option>
                        <option value="all">All platforms</option>
                    </select>

                    <label htmlFor="game-price">Price:</label>
                    <input
                        type="number"
                        id="game-price"
                        name="game-price"
                        {...register("game-price", {
                            required: "Price  is required",
                            min: {
                                value: 5,
                                message: "Price must be at least 5$",
                            },
                        })}
                    />
                    <p className='wrongPrice'>{errors['game-price']?.message}</p>


                    <label htmlFor="game-description">Description</label>
                    <textarea
                        name="game-description"
                        id="game-description"
                        cols="20"
                        rows="3"
                        {...register("game-description", {
                            required: "Description  is required",
                            minLength: {
                                value: 10,
                                message: "Description must be at least 10 characters long",
                            },
                        })}
                    >

                    </textarea>
                    <p className='wrongPrice'>{errors['game-description']?.message}</p>

                </div>
                <div className="form-group">
                    <button className="submitGame" type="submit"><i className="fa-solid fa-pen-to-square"></i>Edit game</button>
                </div>
            </form>
        </section>
    )
}