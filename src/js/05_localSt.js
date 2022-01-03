//--Local Storage--
function setFavMoviesInLocalStorage() {
  localStorage.setItem('fav_movies', JSON.stringify(favMoviesData));
}

function getFavMoviesFromLocalStorage() {
  const savedFavMovies = localStorage.getItem('fav_movies');
  if (savedFavMovies === null) {
    favMoviesData = [];
  } else {
    favMoviesData = JSON.parse(savedFavMovies);
    renderFavMovies();
    //renderAllMovies();
  }
}

//get fav movies from local storage to start
getFavMoviesFromLocalStorage();
