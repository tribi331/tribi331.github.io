$(document).ready(function () {
    $('.p').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});