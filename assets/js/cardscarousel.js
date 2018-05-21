//carousel cards

$(document).ready(function(){
   $('.cards').slick({
     //  slidesToShow: 3,
      // slidesToScroll: 1,
      centerMode: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
       cssEase: 'linear',

              responsive: [
          {
            breakpoint: 7000,
              settings: 'unslick'
          },


          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
      
      });
});


//unslick: true,

//carousel cards

$(document).ready(function(){
   $('.passos').slick({
     //  slidesToShow: 3,
      // slidesToScroll: 1,
      centerMode: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
       cssEase: 'linear',

              responsive: [
          {
            breakpoint: 7000,
              settings: 'unslick'
          },


          {
            breakpoint: 501,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
      
      });
});