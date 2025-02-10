import { useState, useEffect } from 'react';

const useFetch = ("https://explorehub-backend.onrender.com") => {
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true)
            try{
                const res = await fetch("https://explorehub-backend.onrender.com")
                if(!res.ok){
                    setError('failed to fetch')
                }
                const result = await res.json()

                setData(result.data)
                setLoading(false);
            } catch(err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData()
    }, ["https://explorehub-backend.onrender.com"]);

    return {
        data,
        error,
        loading,
    };
}

export default useFetch;
