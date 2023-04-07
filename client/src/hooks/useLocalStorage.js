import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initValue) => {
    const [state, setState] = useState(() => {
        const isUser = localStorage.getItem(key);
        if (isUser) {
            const user = JSON.parse(isUser);
            return user
        }
        else {
            localStorage.removeItem(key)
        }
        return initValue
    });


    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));

    }

    return [state, setLocalStorageState]
}