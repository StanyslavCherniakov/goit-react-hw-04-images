import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = '30789438-6b548ae820f8dbd510a71ac78';

export const fetchImages = async (querry, page) => {
  return await axios.get(`https://pixabay.com/api/?key=30789438-6b548ae820f8dbd510a71ac78&per_page=12&q=${querry}&page=${page}`);
};
