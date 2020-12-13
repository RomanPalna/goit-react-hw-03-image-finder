const API_KEY = '19045018-7ef62a7ed2607017cbe478eaf';
const API_URL = 'https://pixabay.com/api/';

function fetchImages(query) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    q: query,
    page: 1,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  });

  const url = `${API_URL}?${searchParams}`;

  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет изображения с именем ${query}`));
  });
}

const imageApi = { fetchImages };

export default imageApi;
