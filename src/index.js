// import axios from 'axios';

// const APIKEY =
//   'live_kiIKc0A1UnHWmwD71xXGbJrCfpEAcFwPwP8tzLNLsJe0cyFBD77Wn4ux1hjkzPO8';
// const refs = {
//   selectEl: document.querySelector('.breed-select'),
//   cardContainer: document.querySelector('cat-info'),
//   errorEl: document.querySelector('.error'),
//   loaderEl: document.querySelector('.loader'),
// };
// refs.errorEl.classList.add('is-hidden');
// refs.loaderEl.classList.toggle('is-hidden');
// refs.selectEl.addEventListener('change', onChange);

// fetch(`https://api.thecatapi.com/v1/breeds?${APIKEY}`)
//   .then(response => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(cat => {
//     //  .then(renderCatOptions)
//     console.log(cat);
//   })
//   .catch(error => {
//     console.log(error);
//     refs.errorEl.classList.remove('is-hidden');
//   })
//    .finally(() => {
//     refs.loaderEl.classList.toggle('is-hidden');
//     refs.selectEl.classList.toggle('is-hidden');
//   });

// function onChange(event) {
//     refs.loaderEl.classList.toggle('is-hidden');
//     refs.selectEl.classList.toggle('is-hidden');
//     cardContainer.innerHTML = '';
//   const breadID = event.target.value;
//   fetchCatByBreed(breadID)
//     .then(breedArr => {
//       const breedObj = breedArr[0].breeds[0];
//       const breedImg = breedArr[0].url;
//       renderCatCard(breedImg, breedObj);
//       refs.selectEl.classList.toggle('is-hidden');
//       refs.errorEl.classList.add('is-hidden');
//     })
//     .catch(() => {
//         refs.errorEl.classList.remove('is-hidden');
//         refs.selectEl.classList.toggle('is-hidden');
//     })
//     .finally(() => {
//         refs.loaderEl.classList.toggle('is-hidden');
//     });
// }

// function renderCatOptions(breeds) {
//   const markup = breeds
//     .map(breed => `<option value='${breed.id}'>${breed.name}</option>`)
//     .join('');
//     refs.selectEl.insertAdjacentHTML('beforeend', markup);
// }
// function renderCatCard(breedImg, breedObj) {
//   const src = breedImg;
//   const name = breedObj.name;
//   const description = breedObj.description;
//   const temperament = breedObj.temperament;

//   const markupCard = `<div class="card">
//       <div class="card-img-top">
//         <img src="${src}" alt="${name}" width="300" />
//       </div>
//       <div class="text-content">
//         <h2 class="title-breed">${name}</h2>
//         <p class="breed-desc">${description}</p>
//         <p class="breed-temperament">
//           <b>Temperament</b> ${temperament}
//         </p>
//       </div>
//     </div>;`;
//   refs.cardContainer.innerHTML += markupCard;
// }

import axios from 'axios';

const APIKEY =
  'live_xg1Pj4TVScdxd1kS0H77JEkxzqPHSII6huWpRL22J0vQEPkZrnUMZsiB9Dm5KxZ1';

function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${APIKEY}`).then(
    response => {
      return response.json();
    }
  );
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${APIKEY}`
  ).then(response => {
    return response.json();
  });
}

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
