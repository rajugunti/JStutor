
import { useState, useEffect } from "react";
import axios from "axios";

function useQuestions() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const get_url = "http://127.0.0.1:8000/api/questions/";

        axios.get(get_url)
            .then((resp) => {
                setQuestions(resp.data);
                console.log("Questions from Django:", resp.data);
            })
            .catch((err) => {
                console.log("Error fetching questions:", err);
            });

    }, []);

    return questions;
}

export default useQuestions;
