//Function to render all favorite movies
function renderFavMovies() {
  favList.innerHTML = '';
  for (const favMovie of favMoviesData) {
    favList.innerHTML += `<li data-id=${favMovie.mal_id}class="section__results--list--li js_img " >
      <img class="section__results--list--li--img " src="${favMovie.image_url}" alt="" />
      <h3 class="section__results--list--li--title">${favMovie.title}</h3>
      <button class="section__results--list--li--delete js_deleteBtn" title="Delete movie" data-id= "${favMovie.mal_id}" >x</button>
      </li>`;
  }
  addListenerToDeleteBtn();
}
