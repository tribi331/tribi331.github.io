$(document).ready(function () {
    $('.a').owlCarousel({
        loop: true,
        // margin: 10,
        navigation: none,
        responsive: true,
        nav: none,
        // navText: none,
        pagination: none,
        singleItem:false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
});