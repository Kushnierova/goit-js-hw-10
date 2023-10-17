const APIKEY =
  'live_xg1Pj4TVScdxd1kS0H77JEkxzqPHSII6huWpRL22J0vQEPkZrnUMZsiB9Dm5KxZ1';

  const baseUrl = 'https://api.thecatapi.com/';
function fetchBreeds() {
  return fetch(`${baseUrl}v1/breeds?api_key=${APIKEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${baseUrl}v1/images/search?breed_ids=${breedId}&api_key=${APIKEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
