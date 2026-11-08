import axios from 'axios';

const fetchQuestions = () => {
  const url = 'http://127.0.0.1:8000/api/questions/';

  return axios.get(url)
    .then((resp) => {
      console.log(resp.data);
      return resp.data; 
    })
    .catch((err) => {
      console.log(err);
      
    });
};

export { fetchQuestions };