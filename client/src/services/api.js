const host = "http://localhost:3030/";
async function request(method, url, data) {
    let user = JSON.parse(sessionStorage.getItem('user'));
    let option = {
        method,
        headers: {}
    }
    if (data) {
        option.headers['Content-Type'] = 'Application/json';
        option.body = JSON.stringify(data)
    }
    
    if (user) {
        const token = user.accessToken;
        option.headers['X-Authorization'] = token;
    }
    try {
        let res = await fetch(host + url, option);
        if (!res.ok) {
            if (res.status === 403) {
                sessionStorage.removeItem('user')
            }
            const err = await res.json();
            throw new Error(err.message)
        }
        if (res.status === 204) {
            return res
        }
        else {
            return res.json()
        }
    }
    catch (err) {
        alert(err.message)
        throw err
    }
}


export async function get(url) {
    return await request("GET", url)
}


export async function post(url, data) {
    return await request("POST", url, data)
}


export async function put(url, data) {
    return await request('PUT', url, data)
}


export async function del(url) {
    return await request('DELETE', url)
}