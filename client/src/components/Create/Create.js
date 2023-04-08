import './Create.css'
import { useState, useContext } from 'react';
import { createGame } from '../../services/data';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form'

export const Create = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        defaultValues: {
            "game-title": "",
            "game-type": "",
            "game-imageUrl": "",
            "platform": "playstation",
            "game-price": "",
            "game-description": ""
        }
    })
    const navigate = useNavigate();
    const onSubmitHandler = async (data) => {
        try {
            const res = await createGame(data);
            navigate('/catalog')
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="createEditGame">
            <img src={require('../../assets/[removal.ai]_tmp-641b8c4d4c23f_POLSYR.png')} />
            <form className="modifyGame" onSubmit={handleSubmit(onSubmitHandler)} method='post'>
                <div className="game-form-group">
                    <label htmlFor="game-title">Game Title:</label>
                    <input
                        type="text"
                        id="game-title"
                        name="game-title"
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

                    <select id="platform" name="platform" {...register("platform", {})}>
                        <option value="pc">PC</option>
                        <option value="xbox">Xbox</option>
                        <option value="playstation">PlayStation</option>
                        <option value="mobile">Mobile</option>
                        <option value="nintendo">Nintendo</option>
                        <option value="all-platforms">All platforms</option>
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

                    <label htmlFor="game-description" className='descLabel'>Description</label>
                    <textarea
                        name="game-description"
                        id="game-description"
                        cols="20"
                        rows="2"
                        {...register("game-description", {
                            required: "Description  is required",
                            minLength: {
                                value: 10,
                                message: "Description must be at least 10 characters long",
                            },
                        })}>
                    </textarea>
                    <p className='wrongPrice'>{errors['game-description']?.message}</p>

                </div>
                <div className="form-group">
                    <button className="submitGame" type="submit"><i className="fa-solid fa-circle-plus"></i>Publish offer</button>
                </div>
            </form>
        </section>
    )
}