export const request = async(method, url) => {
    const response = await fetch(url,{
        method,
    })
    if(response.status == 204){
        return {}
    }
    const result = await response.json();
    return result
}