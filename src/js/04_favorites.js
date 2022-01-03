//Function to render all favorite movies //section__results--list--li
function renderFavMovies() {
  favList.innerHTML = '';
  for (const favMovie of favMoviesData) {
    favList.innerHTML += `<li data-id=${favMovie.mal_id} class=" section__fav--list-favorite--li  js_img " >
      <img class="section__results--list--li--img favImg" src="${favMovie.image_url}" alt="" />
      <h3 class="section__results--list--li--title favTitle" >${favMovie.title}</h3>
      <button class="section__results--list--li--delete delete-btn js_deleteBtn" title="Delete movie" data-id= "${favMovie.mal_id}" >x</button>
      </li>`;
  }
  addListenerToDeleteBtn();
}
