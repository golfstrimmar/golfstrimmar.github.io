

$(document).ready(function (e) {
  $(".search__button").on("click", function () {
    $(".popup-top-filter").toggleClass("popup-top-filter_active");
    $("body").addClass("lock");
  });

  $(".filter-lap__close").on("click", function () {
    $(".popup-top-filter").toggleClass("popup-top-filter_active");
      $("body").removeClass("lock");
  });



  // --------------выдвигаются фильтры по кнопке фильтры на lp и sm----------------------------------------------

  $(".sale-nav__item--filters-search").on("click", function () {
    $(".content-sale__filters").toggleClass("content-sale__filters_active");
    $("body").addClass("lock");
  });

    $(".sale-form-lp__text i").on("click", function () {
      $(".content-sale__filters").toggleClass("content-sale__filters_active");
      $("body").removeClass("lock");
    });

  // ---------------------фильтры на страницы поиска новостройки   карта-----------------------------------------

});
$(document).ready(function (e) {
  $(".viewing__chip-filters").on("click", function () {
    $(".viewing__filters-map").toggleClass("viewing__filters-map_active");
    $("body").addClass("lock");
  });

  $(".viewing-filters-close").on("click", function () {
    $(".viewing__filters-map").toggleClass("viewing__filters-map_active");
    $("body").removeClass("lock");
  });



  // --------------выдвигаются фильтры по кнопке фильтры на lp и sm----------------------------------------------

  $(".sale-nav__item--filters-search").on("click", function () {
    $(".content-sale__filters").toggleClass("content-sale__filters_active");
    $("body").addClass("lock");
  });

    $(".sale-form-lp__text i").on("click", function () {
      $(".content-sale__filters").toggleClass("content-sale__filters_active");
      $("body").removeClass("lock");
    });

  // --------------------------------------------------------------

});



$(document).ready(function (e) {
  $(".search-lp-js").slideUp(1);
  $(".sale-form-lp__text--extend").on("click", function () { 
    if ($(this).hasClass("act") ){
      $(".search-lp-js").slideUp(300);
      $(this).removeClass("act");
      $(this).find("i").css("transform", "translateY(-50%) rotate(0deg)");
     }else{
      $(this).addClass("act");
      $(".search-lp-js").slideDown(500);
      $(this).find("i").css("transform", "translateY(-50%) rotate(180deg)");
      }		
    
  
  
  });

});           				


$(document).ready(function (e) {
  $(".flat-js").slideUp(1);
  $(".rollup-js").on("click", function () {
    if ($(this).hasClass("act")) {
      $(".flat-js").slideUp(300);
      $(this)
        .removeClass("act")
        .html("Развернуть <i class='icon-chevron-down'> </i>");
      $(this).find("i").css("transform", "translateY(0%) rotate(0deg)");
    } else {
      $(this).addClass("act").html("Свернуть <i class='icon-chevron-down'> </i>");
      $(".flat-js").slideDown(500);
      $(this).find("i").css("transform", "translateY(0%) rotate(180deg)");
    }
  });
});


