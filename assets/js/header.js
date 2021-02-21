
// ------------------------------------------------


let wrapper = document.querySelector(".wrapper");
let headerOverlay = document.querySelector(".header__menu_overlay");
let burger = document.querySelector(".header-main__burger");
let body = document.body;
let header = document.querySelector(".header__body");
let menu = document.querySelector(".header__sidebar");
let service = document.querySelector(".header__service");

wrapper.addEventListener("click", function (event) {
  
  
  if (event.target == burger) {
    menu.classList.add("header__sidebar_act");
    // menu.appendChild(service);
    // service.classList.add("header-service_act");
    // body.classList.add("lock");

  // } else {
  // if (
  //   headerOverlay !== event.target &&
  //   document.querySelector("input") !== event.target &&
  //   document.querySelector("i") !== event.target &&
  //   document.querySelector(".bg") !== event.target
  // ) {
    // menu.classList.remove("header__menu_act");
    // service.classList.remove("header-service_act");
    // header.appendChild(service);
    // body.classList.remove("lock");
  // }
  }
  if (event.target == document.querySelector(".header-main__close")) {
    menu.classList.remove("header__sidebar_act");
    // body.classList.remove("lock");
  }
  
});


window.addEventListener("resize", function (event) {
  if (document.documentElement.clientWidth > 992) {
    if (menu.classList.contains("header__menu_act")) {
      menu.classList.remove("header__menu_act");
      // service.classList.remove("header-service_act");
      // header.appendChild(service);
      body.style.overflow = "visible";
      }
  } 
});

// ----- header меняется в размерах и цвете
  //  window.addEventListener("scroll", function (event) {
  //    if (window.pageYOffset > 150) {
  //      document.querySelector(".header").classList.add("responcive_header");
       
  //    } else {
  //      document.querySelector(".header").classList.remove("responcive_header");
  //    }
  //  });

   // ============кнопка на начало если вдруг не понравится 
   // $(document).ready(function (e) {
   //     $(".scrollup").click(function () {
   //       $("html, body").animate(
   //         {
   //           scrollTop: 0,
   //         },
   //         1000
   //       );
   //     });
   //   }),
   //     $(document).ready(function (e) {
   //       $(window).scroll(function () {
   //         if ($(this).scrollTop() > 200) {
   //           $(".scrollup").fadeIn();
   //         } else {
   //           $(".scrollup").fadeOut();
   //         }
   //       });
   //     }),

   (function () {
     "use strict";

     var upDownBtn = document.querySelector(".up_down_btn");
     var check;

     function trackScroll() {
       var scrolled = window.pageYOffset;
       var coords = 200;

       if (scrolled > coords) {
         upDownBtn.classList.add("up_down_btn-show");
         upDownBtn.innerHTML = "&uarr;";
         upDownBtn.setAttribute("title", "Наверх");
         check = false;
       }
       if (scrolled < coords) {
         upDownBtn.innerHTML = "&darr;";
         upDownBtn.setAttribute("title", "Вниз");
         check = true;
       }
     }

     function backToTop() {
       upDownBtn.classList.add("up_down_btn-disabled");
       if (!check) {
         (function goTop() {
           if (window.pageYOffset !== 0) {
             window.scrollBy(0, -15);
             setTimeout(goTop, 0);
           } else {
             upDownBtn.classList.remove("up_down_btn-disabled");
           }
         })();
         return;
       } else if (check) {
         (function goBottom() {
           var match = Math.ceil(
             window.pageYOffset + document.documentElement.clientHeight
           );

           if (match != document.documentElement.scrollHeight) {
             window.scrollBy(0, 15);
             setTimeout(goBottom, 0);
           } else {
             upDownBtn.classList.remove("up_down_btn-disabled");
           }
         })();
         return;
       }
     }

     window.addEventListener("scroll", trackScroll);
     upDownBtn.addEventListener("click", backToTop);
   })();


         // ==скроллинг====ЯКОРЯ==============
      // $(document).ready(function (e) {
      //   $('a[href^="#slider"]').click(function () {
      //     var target = $(this).attr("href");
      //     $("html, body").animate(
      //       { scrollTop: $(target).offset().top - 60 },
      //       800
      //     ); //800 - длительность скроллинга в мс
      //         menu.classList.remove("header__menu_act");
      //         service.classList.remove("header-service_act");
      //         header.appendChild(service);
      //         body.style.overflow = "visible";
      //     return false;
      //   });
      // }),
      // $(document).ready(function (e) {
      //   $('a[href^="#work"]').click(function () {
      //     var target = $(this).attr("href");
      //     $("html, body").animate(
      //       { scrollTop: $(target).offset().top - 60 },
      //       800
      //     ); //800 - длительность скроллинга в мс
      //         menu.classList.remove("header__menu_act");
      //         service.classList.remove("header-service_act");
      //         header.appendChild(service);
      //         body.style.overflow = "visible";
      //     return false;
      //   });
      // }),
      // $(document).ready(function (e) {
      //   $('a[href^="#arhi"]').click(function () {
      //     var target = $(this).attr("href");
      //     $("html, body").animate(
      //       { scrollTop: $(target).offset().top - 60 },
      //       800
      //     ); //800 - длительность скроллинга в мс
      //         menu.classList.remove("header__menu_act");
      //         service.classList.remove("header-service_act");
      //         header.appendChild(service);
      //         body.style.overflow = "visible";
      //     return false;
      //   });
      // }),
      // $(document).ready(function (e) {
      //   $('a[href^="#footer"]').click(function () {
      //     var target = $(this).attr("href");
      //     $("html, body").animate(
      //       { scrollTop: $(target).offset().top - 60 },
      //       800
      //     ); //800 - длительность скроллинга в мс
      //         menu.classList.remove("header__menu_act");
      //         service.classList.remove("header-service_act");
      //         header.appendChild(service);
      //         body.style.overflow = "visible";
      //     return false;
      //   });
      // })
     