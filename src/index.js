import { fetchBreeds, fetchCatByBreed } from "./cat-api";


const selectEl = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const errorEl = document.querySelector('.error');
const loaderEl = document.querySelector('.loader');

errorEl.classList.add('is-hidden');
selectEl.classList.toggle('is-hidden');

selectEl.addEventListener('change', onChange);

fetchBreeds()
  .then(renderCatOptions)
  .catch(() => {
    errorEl.classList.remove('is-hidden');
  })
  .finally(() => {
    loaderEl.classList.toggle('is-hidden');
    selectEl.classList.toggle('is-hidden');
  });

function onChange(event) {
  loaderEl.classList.toggle('is-hidden');
  selectEl.classList.toggle('is-hidden');
  catInfo.innerHTML = '';
  const breadID = event.target.value;
  fetchCatByBreed(breadID)
    .then(breedArr => {
      const breedObj = breedArr[0].breeds[0];
      const breedImg = breedArr[0].url;
      renderCatCard(breedImg, breedObj);
      selectEl.classList.toggle('is-hidden');
      errorEl.classList.add('is-hidden');
    })
    .catch(() => {
      errorEl.classList.remove('is-hidden');
      selectEl.classList.toggle('is-hidden');
    })
    .finally(() => {
      loaderEl.classList.toggle('is-hidden');
    });
}

function renderCatOptions(breeds) {
  const markup = breeds
    .map(breed => `<option value='${breed.id}'>${breed.name}</option>`)
    .join('');
  selectEl.insertAdjacentHTML('beforeend', markup);
}

function renderCatCard(breedImg, breedObj) {
  const src = breedImg;
  const name = breedObj.name;
  const description = breedObj.description;
  const temperament = breedObj.temperament;

  const markupCard = `<div class="card">
      <div class="card-img-top">
        <img src="${src}" alt="${name}" width="300" />
      </div>
      <div class="text-content">
        <h2 class="title-breed">${name}</h2>
        <p class="breed-desc">${description}</p>
        <p class="breed-temperament">
          <b>Temperament</b> ${temperament}
        </p>
      </div>
    </div>;`;

  catInfo.innerHTML += markupCard;
}
