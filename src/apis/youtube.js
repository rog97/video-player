import axios from 'axios';

const KEY = 'AIzaSyCvd5mX7VmhO5-linOls_ZR_2O1dvw98nU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
