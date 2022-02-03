

// CONST FOR TOGGLE BUTTON IN NAVBAR
const toggleButton = document.getElementsByClassName('toggle-button') [0]
const navbarLinks = document.getElementsByClassName('navbar-links') [0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    console.log()
})

const clearEl = document.getElementById("clear-history");

 // Clear History button
 clearEl.addEventListener("click", function () {
    document.getElementById("output").innerHTML = "";
    window.location.replace('#music');
    localStorage.clear();
    searchHistory = [];
    renderSearchHistory();
})