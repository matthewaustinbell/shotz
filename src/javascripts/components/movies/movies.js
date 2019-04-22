import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domstringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<h3>${movie.name}</h3>`;
    domString += '<div class="card" style="width: 18rem;">';
    domString += `<div id=${movie.id} class="card-body">`;
    domString += `<h5 class="card-title">${movie.id}</h5>`;
    domString += `<h5 class="card-title">${movie.name}</h5>`;
    domString += `<h5 class="card-title">${movie.genre}</h5>`;
    domString += `<h5 class="card-title">${movie.releaseDate}</h5>`;
    domString += `<h5 class="card-title">${movie.description}</h5>`;
    domString += `<h5 class="card-title">${movie.locations.length}</h5>`;
    domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      console.error(resp);
      const movieResults = resp.data.movies;
      movies = movieResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
