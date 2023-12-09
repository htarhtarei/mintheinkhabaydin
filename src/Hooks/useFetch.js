import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (key) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8000/${key}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err.message));
    }, [key])

    return [data]
}

export default useFetch