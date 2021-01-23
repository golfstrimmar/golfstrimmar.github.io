// import $ from "jquery";

$(Document).ready(function () {

function slickify() {
  $(".slider-sale-js").slick({
    slidesToShow: 4,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    centerMode: false,
    nextArrow: $(".slider__arrow_next--sale"),
    prevArrow: $(".slider__arrow_prev--sale"),
    responsive: [

      {
        breakpoint: 1200,
        settings: "unslick",
      },
    ],
  });

  $(".slider-rent-js").slick({
    slidesToShow: 4,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    centerMode: false,
    nextArrow: $(".slider__arrow_next--rent"),
    prevArrow: $(".slider__arrow_prev--rent"),
    responsive: [
      {
        breakpoint: 1200,
        settings: "unslick",
      },
    ],
  });


  $(".slider-advert-js").slick({
    slidesToShow: 4,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    centerMode: false,
    nextArrow: $(".slider__arrow_next--advert"),
    prevArrow: $(".slider__arrow_prev--advert"),
    responsive: [
      {
        breakpoint: 1200,
        settings: "unslick",
      },
    ],
  });


 $(".slider-advert-next-js").slick({
   slidesToShow: 4,
   speed: 800,
   easing: "ease",
   cssEase: "linear",
   centerMode: false,
   nextArrow: $(".slider__arrow_next--advert-next"),
   prevArrow: $(".slider__arrow_prev--advert-next"),
   responsive: [
     {
       breakpoint: 1200,
       settings: "unslick",
     },
   ],
 });

 $(".slider-revieves-js").slick({
   slidesToShow: 4,
   speed: 800,
   easing: "ease",
   cssEase: "linear",
   centerMode: false,
   nextArrow: $(".slider__arrow_next--revieves"),
   prevArrow: $(".slider__arrow_prev--revieves"),
   responsive: [
     {
       breakpoint: 1200,
       settings: "unslick",
     },
   ],
 });




}

slickify();
$(window).resize(function () {
  var $windowWidth = $(window).width();
  if ($windowWidth >= 1200) {
    slickify();
  }
});



$(".slider-bunners-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".bunners-arrows__arrow_next"),
  prevArrow: $(".bunners-arrows__arrow_prev"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
			<span class="slick-dots-current">' +
      current +
      '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});


















});





