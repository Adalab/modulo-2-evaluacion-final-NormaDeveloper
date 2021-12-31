//Function to handle movies click
function handleClickImg(e) {
  //Identify clicked LI

  //Get selected movie id
  const clickedMovieId = parseInt(e.currentTarget.dataset.id);

  //Look for selected object in moviesData by ID
  const selectedMovieObj = moviesData.find(
    (row) => row.mal_id === clickedMovieId
  );
  console.log(selectedMovieObj);

  //Look for the clicked movie in favMovieData by ID
  const movieInFavMoviesData = favMoviesData.find(
    (row) => row.mal_id === clickedMovieId
  );

  //Add/remove movie from favorite arr
  if (movieInFavMoviesData === undefined) {
    //If the movie is not in favMoviesData, then add it
    favMoviesData.push(selectedMovieObj);
  } else {
    //If the movie is already in favMoviesData, then remove it
    favMoviesData = favMoviesData.filter(
      (row) => row.mal_id !== clickedMovieId
    );
  }

  //Save favorites in Local Storage
  setFavMoviesInLocalStorage();

  //Render favorite movies
  renderFavMovies();
  //Render results list movies
  renderAllMovies();
}
