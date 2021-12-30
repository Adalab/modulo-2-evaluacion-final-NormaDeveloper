// Function to render all movies
function renderAllMovies() {
  resultsList.textContent = '';

  for (const eachMovie of moviesData) {
    //Evaluate if movie is in fav arr
    console.log(eachMovie.title);
    //Check if the movie is already in fav arr
    const movieInFav = favMoviesData.find(
      (row) => row.mal_id === eachMovie.mal_id
    );

    //Evaluate if movie is in fav
    let favClass = '';
    if (movieInFav === undefined) {
      //If the movie is not in fav arr, then render li with no fav class
      favClass = '';
    } else {
      //If the movie is in fav arr, then render li with fav class
      favClass = 'fav';
    }

    //Evaluate if movie has any image
    //----Example of a movie with no image: Muv-Luv_Alternative_2nd_Season
    if (eachMovie.image_url) {
      resultsList.innerHTML += `<li class="section__results--list--li js_img ${favClass}" data-id=${eachMovie.mal_id}>
  <img class="section__results--list--li--img " src=" ${eachMovie.image_url}" alt="" />
  <h3 class="section__results--list--li--title">${eachMovie.title}</h3>
  </li>`;
    } else {
      eachMovie.image_url = eachMovie.image_url.replace(
        eachMovie.image_url,
        PLACEHOLDER_URL
      );

      resultsList.innerHTML += `<li class="section__results--list--li js_img ${favClass}" data-id=${eachMovie.mal_id}>
  <img class="section__results--list--li--img " src=" ${eachMovie.image_url}" alt="" />
  <h3 class="section__results--list--li--title">${eachMovie.title}</h3>
  </li>`;
    }
  }

  addListenersToMovies();
}

//Function to add listeners to all movies of the results
function addListenersToMovies() {
  const movieImage = document.querySelectorAll('.js_img');
  for (const eachMovieImg of movieImage) {
    eachMovieImg.addEventListener('click', handleClickImg);
  }
}
