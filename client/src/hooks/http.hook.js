import {useState} from 'react';


export const useHttp = () => {

    const [error, setError] = useState(false);

    return {error}


}