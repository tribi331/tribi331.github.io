
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });
    $(document).ready(function(){
        $('.single-item').slick();
      });;
      var fixMenu = $('.menu').offset().top;
      $(window).on('scroll',function(){
          if($(window).scrollTop() > fixMenu){
              $('.menu').addClass('is-fixed');
          }
          else{
            $('.menu').removeClass('is-fixed');
          }
      })
});







