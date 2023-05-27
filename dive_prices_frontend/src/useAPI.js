import {useEffect, useState} from 'react';

export const useAPI = url => {
    const [state, setState] = useState({data: null, loading: true});

    useEffect (() => {
        setState(({date: null, loading: true}));
        fetch(url)
        .then(response => response.json())
        .then(y => {
            setState({ data: y, loading: false})

            console.log(y)
        });

    }, [url])

    return state;
};