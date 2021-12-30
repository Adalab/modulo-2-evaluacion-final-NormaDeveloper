//Conect to api to get all data
function conectToApi() {
  let inputValue = inputField.value.toLowerCase();
  if (inputValue.length >= 3) {
    //get movies from api
    fetch(`https://api.jikan.moe/v3/search/anime?q=${inputValue}&limit=8`)
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
