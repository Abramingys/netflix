"use strict"

let ul = document.querySelector('.movies-list');

function card({ title, release_date, genres }) {

  return `
            <li class="movies-item">
                  <img
                    class="movies-item_poster"
                    src="/img/poster.png"
                    alt="poster"
                  />
                  <div class="movies-item_info">
                    <p class="movies-item_title">${title}</p>
                    <span class="movies-item_year">${release_date.split('-')[0]}</span>
                  </div>
                  <p class="movies-item_description">${genres.join(' & ')}</p>
                </li>`;
};

fetch('http://localhost:4000/movies?limit=20')
  .then(response => response.json())
  .then(films => films.data)
  .then(data => ul.insertAdjacentHTML("afterbegin", data.map(item => card(item)).join('')))


// fetch('http://localhost:4000/movies')
//   .then(response => response.json())
//   .then(films => console.log(films))




