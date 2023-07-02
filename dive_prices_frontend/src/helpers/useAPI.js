import {useEffect, useState} from 'react';

export const useAPI = (url)=> {
    const [state, setState] = useState({data: null, loading: true});

    useEffect (() => {
        setState(({data: null, loading: true}));
        fetch(url, {
            method: "GET",
        })
        .then(response => response.json())
        .then(y => {
            setState({ data: y, loading: false})
        });

    }, [url])

    return state;
};

