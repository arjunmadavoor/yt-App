import axios from 'axios';

const KEY = 'AIzaSyCgj49R3uRVvX8w3deGaRUPanOi451CVac';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
