const API_KEY = '19045018-7ef62a7ed2607017cbe478eaf';
const API_URL = 'https://pixabay.com/api/';

async function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: 1,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  });

  const url = `${API_URL}?${searchParams}`;

  const fetchImg = await fetch(url);
  const images = await fetchImg.json();

  return images;

  // return fetch(url).then(response => {
  //   if (response.ok) {
  //     return response.json().then(hits => hits);
  //   }

  //   return Promise.reject(new Error(`Нет изображения с именем ${query}`));
  // });
}

const imageApi = { fetchImages };

export default imageApi;
