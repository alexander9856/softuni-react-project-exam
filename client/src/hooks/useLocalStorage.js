import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initValue) => {
    const [state, setState] = useState(initValue);

    useEffect(() => {
        const isUser = localStorage.getItem(key);
        if (isUser) {
            const user = JSON.parse(isUser);
            setState(user)
        }
        else{
            localStorage.removeItem(key)
        }
    },[])
    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));

    }

    return [state, setLocalStorageState]
}