import * as api from './api.js';

let endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'create': 'data/gamesForSale',
    'getAllItems': 'data/gamesForSale',
    'getGameById': 'data/gamesForSale/',

}
export async function login(data) {
    let user = await api.post(endpoints.login, data)
    // localStorage.setItem('user', JSON.stringify(user))
    return user

}
export async function register(data) {
    let user = await api.post(endpoints.register, data)
    // localStorage.setItem('user', JSON.stringify(user))
    return user
}

export async function logout() {
    await api.get(endpoints.logout)
    // localStorage.removeItem('user')
}
export async function createGame(data) {
    let res = await api.post(endpoints.create, data)
    return res
}

export async function getAllGames() {
    let res = await api.get(endpoints.getAllItems)
    return res
}

export async function getGamebyId(id) {
    let res = await api.get(endpoints.getGameById + id)
    return res
}

export async function updateGame(id, data) {
    let res = await api.put(endpoints.getGameById + id, data)
    return res
}

export async function delGame(id) {
    await api.del(endpoints.getGameById + id)
}










