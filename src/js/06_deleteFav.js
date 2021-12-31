//Function to add listeners to delete Btn
function addListenerToDeleteBtn() {
  const deleteBtns = document.querySelectorAll('.js_deleteBtn');
  //Evaluate if delete buttons are in favs and then render
  for (const eachDeleteBtn of deleteBtns) {
    eachDeleteBtn.addEventListener('click', handleClickImg);
  }
}

function handleReset() {
  //Get rid of all favorites movies
  favMoviesData = [];
  //Clear LocalStorage
  localStorage.clear();
  //reload web
  location.reload();
}

//listener
resetBtn.addEventListener('click', handleReset);
