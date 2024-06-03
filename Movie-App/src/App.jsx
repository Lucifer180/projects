import './App.css';
//b169cf0
import axios from 'axios';
const API_URL="http://www.omdbapi.com/?apikey=&b169cf0"

function App() {
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1970',
      end_year: '2020',
      min_imdb: '6',
      max_imdb: '7.8',
      genre: 'action',
      language: 'english',
      type: 'movie',
      sort: 'latest',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': '0a9a4479bfmsh69f9dbca1590439p140dc6jsn3978b1d884c2',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };
  
  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        console.error('Error request:', error.request);
      } else {
        // Something else happened in making the request that triggered an Error
        console.error('Error message:', error.message);
      }
    }
  }
  
  fetchData();
  
  return (
    <>
    <h1></h1>
    </>
  )
}

export default App
