//when user scrolls page, execute stickyNav
window.onscroll = function() {stickyNav()};

//get Navbar
var navbar = document.getElementsByClassName("navbar");

//get offset position of navbar
var sticky = navbar.offsetTop;

//add sticky class to navbar when reach its scroll position. Remove "sticky" when leaving scroll position
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}