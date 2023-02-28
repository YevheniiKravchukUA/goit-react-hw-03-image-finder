import axios from 'axios';

export async function fetchImages(query, page = 1) {
  const KEY = '22542197-803b3827949c8e03dddadbe4d';

  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&adult=false`
  );

  return response.data.hits;
}
