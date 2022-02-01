

// CONST FOR TOGGLE BUTTON IN NAVBAR
const toggleButton = document.getElementsByClassName('toggle-button') [0]
const navbarLinks = document.getElementsByClassName('navbar-links') [0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    console.log()
})



//Just a silly alert
