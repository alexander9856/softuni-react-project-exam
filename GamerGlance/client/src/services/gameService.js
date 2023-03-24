import { request } from "./requester"

const url = 'http://localhost:3030/jsonstore/games'

export const getAllGames = async () => {
    const allGames = await request("GET", url)

    return allGames
}