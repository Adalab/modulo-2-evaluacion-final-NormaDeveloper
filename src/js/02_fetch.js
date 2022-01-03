//Conect to api to get all data
function conectToApi() {
  let inputValue = inputField.value.toLowerCase();
  if (inputValue.length >= 3) {
    //get movies from api
    fetch(`https://api.jikan.moe/v3/search/anime?q=${inputValue}&limit=9`)
      .then((response) => response.json())
      .then((data) => {
        moviesData = data.results;
        moviesData.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          }

          return 0;
        });
        renderAllMovies();
      })
      .catch((error) => console.log(`Ha sucedido un error: ${error}`));
  }
}

//handle function for button Search
function handleSearchBtn(e) {
  e.preventDefault();
  conectToApi();
}

//listeners
searchBtn.addEventListener('click', handleSearchBtn);

// Function to render all movies
function renderAllMovies() {
  resultsList.textContent = '';
  const resultsTitle = document.querySelector('.js_resultsTitle');
  resultsTitle.classList.remove('hidden');
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
  <h3 class="section__results--list--li--title ">${eachMovie.title}</h3>
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
