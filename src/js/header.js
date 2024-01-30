const searchBar = document.getElementById("search-bar");
const serchInput = document.getElementById("search-input");

searchBar.addEventListener("click", function () {
  searchBar.classList.add("search-active");
});

document.addEventListener("click", function (event) {
  if (event.target != searchInput) {
    searchBar.classList.remove("search-active");
  }
});



