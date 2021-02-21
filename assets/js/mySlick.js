
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
// --------------------------------------------
$(".extended-slider-1-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-1-arrows__arrow_next"),
  prevArrow: $(".extended-slider-1-arrows__arrow_prev"),

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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },


});


// -------------------------------------------------------------------------




$(".extended-slider-2-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-2-arrows__arrow_next"),
  prevArrow: $(".extended-slider-2-arrows__arrow_prev"),

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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});




// --------------------------------------------------











$(".extended-slider-3-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-3-arrows__arrow_next"),
  prevArrow: $(".extended-slider-3-arrows__arrow_prev"),

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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});

$(".extended-slider-new-1-js").slick({
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-new-1-arrows__arrow_next"),
  prevArrow: $(".extended-slider-new-1-arrows__arrow_prev"),
  dots: true,

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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});

$(".extended-slider-new-2-js").slick({
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-new-2-arrows__arrow_next"),
  prevArrow: $(".extended-slider-new-2-arrows__arrow_prev"),
});



$(".extended-slider-new-3-js").slick({
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-new-3-arrows__arrow_next"),
  prevArrow: $(".extended-slider-new-3-arrows__arrow_prev"),
  dots: true,
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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});
$(".extended-slider-new-4-js").slick({
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-new-4-arrows__arrow_next"),
  prevArrow: $(".extended-slider-new-4-arrows__arrow_prev"),
  
});
$(".extended-slider-new-5-js").slick({
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-new-5-arrows__arrow_next"),
  prevArrow: $(".extended-slider-new-5-arrows__arrow_prev"),
  
});
$(".extended-slider-new-6-js").slick({
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-new-6-arrows__arrow_next"),
  prevArrow: $(".extended-slider-new-6-arrows__arrow_prev"),
  
});



$(".slider-viewing-1-js").slick({
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".viewing-1__arrow_next"),
  prevArrow: $(".viewing-1__arrow_prev"),
  dots: true,
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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});




















$(".extended-slider-4-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-4-arrows__arrow_next"),
  prevArrow: $(".extended-slider-4-arrows__arrow_prev"),

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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});

$(".extended-slider-5-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-5-arrows__arrow_next"),
  prevArrow: $(".extended-slider-5-arrows__arrow_prev"),

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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});

$(".extended-slider-6-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".extended-slider-6-arrows__arrow_next"),
  prevArrow: $(".extended-slider-6-arrows__arrow_prev"),

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
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});


















});





