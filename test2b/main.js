
$(document).ready(function(){
  $('.carousel').slick({
    infinite: false,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: true,
    useCSS: true,
    nextArrow: '<i class="fa fa-angle-right fa-2x"></i>',
    prevArrow: '<i class="fa fa-angle-left fa-2x"></i>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});
