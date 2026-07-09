import axios from "axios";
import { useState, useEffect } from "react";

function useAPI(URL) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await axios.get(URL);
                setTimeout(() => {
                    setData(response.data);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                setError(error.message)
            }
        }
        fetchAPI()
    }, [URL]);

    return { data, error, loading };
}

export default useAPI;