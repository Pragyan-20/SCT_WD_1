window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    
    // Check if the scroll position is greater than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};