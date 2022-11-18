$(document).ready(function(){
    $('.second-movcard').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,

        dots: true,
        arrows:false,

        autoplay: false,
        autoplaySpeed: 5000,

        responsive: [
            {
              breakpoint: 1024,
              settings: 
              {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: 
              {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });