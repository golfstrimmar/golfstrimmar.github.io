// ------------------------------------------------
 $(document).ready(function () {
$("#test").on("click", function () {
  $.fancybox.open(
    '<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>'
  );
});

$("select").on("change", function () {
  $(this).trigger("blur");
});

});

$(document).ready(function (e) {

  $(".bunner-info-js").fadeOut(1);
  $(".extended-icon-js").on("click", function () { 
  if ($(this).hasClass("act")) {
    $(this)
      .removeClass("act")
      .closest(".extended-slider-item__bunners")
      .siblings(".bunner-info-js")
      .removeClass("act")
      .fadeOut(200);
  } else {
  $(this)
    .addClass("act")
    .closest(".extended-slider-item__bunners")
    .siblings(".bunner-info-js")
    .addClass("act")
    .fadeIn(200);
 }
});


    $(".bunner-info-eco-js").fadeOut(1);
  $(".info-icon-eco-js").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this)
        .removeClass("act")
        .closest(".extended-slider-item__bunners")
        .siblings(".bunner-info-eco-js")
        .removeClass("act")
        .fadeOut(200);
   
   
    } else {
      $(this)
        .addClass("act")
        .closest(".extended-slider-item__bunners")
        .siblings(".bunner-info-eco-js")
        .addClass("act")
        .fadeIn(200);
    }
  });


    $(".bunner-info-mortgage-js").fadeOut(1);
  $(".extended-icon-mortgage-js").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this)
        .removeClass("act")
        .closest(".extended-slider-item__bunners")
        .siblings(".bunner-info-mortgage-js")
        .removeClass("act")
        .fadeOut(200);
    } else {
      $(this)
        .addClass("act")
        .closest(".extended-slider-item__bunners")
        .siblings(".bunner-info-mortgage-js")
        .addClass("act")
        .fadeIn(200);
    }
  });

  // --------------------------------------------------------------
if ($(window).width() <= 1200) {
  $(".more").nextAll(".price-list-new__item").css("display", "none");
  $(".more").find("i").css("transform", "rotate(0deg)");

} else {
     $(".more").nextAll(".price-list-new__item").css("display", "block");
     $(".more").find("i").css("transform", "rotate(0deg)");
}



$(window).resize(function () {
  if ($(window).width() <= 1200) {
    $(".more").nextAll(".price-list-new__item").css("display", "none");
    $(".more").removeClass("act").find("i").css("transform", "rotate(0deg)");
  } else {
    $(".more").nextAll(".price-list-new__item").css("display", "block");
    $(".more").removeClass("act").find("i").css("transform", "rotate(0deg)");
  }
});



 $(".more").on("click", function () {
   if ($(this).hasClass("act")) {
     $(this).removeClass("act").nextAll(".price-list-new__item").slideUp(150);
     $(this).find("i").css("transform", "rotate(0deg)");
   } else {
     $(this).addClass("act").nextAll(".price-list-new__item").slideDown(150);
     $(this).find("i").css("transform", "rotate(180deg)");
   }
 });





});












  // -----------------------------------------------------------------------------------


 $(document).mouseup(function (e) {
   // событие клика по веб-документу
   var div = $(".extended-icon-js"); // тут указываем ID элемента
   if (
     !div.is(e.target) && // если клик был не по нашему блоку
     div.has(e.target).length === 0
   ) {
     // и не по его дочерним элементам
     $(".extended-icon-js").removeClass("act");
     $(".bunner-info-js").addClass("act").fadeOut(200);
   }
 });


 $(document).mouseup(function (e) {
   // событие клика по веб-документу
   var div = $(".info-icon-eco-js"); // тут указываем ID элемента
   if (
     !div.is(e.target) && // если клик был не по нашему блоку
     div.has(e.target).length === 0
   ) {
     // и не по его дочерним элементам
     $(".info-icon-eco-js").removeClass("act");
     $(".bunner-info-eco-js").addClass("act").fadeOut(200);
   }
 });

 $(document).mouseup(function (e) {
   // событие клика по веб-документу
   var div = $(".extended-icon-mortgage-js"); // тут указываем ID элемента
   if (
     !div.is(e.target) && // если клик был не по нашему блоку
     div.has(e.target).length === 0
   ) {
     // и не по его дочерним элементам
     $(".extended-icon-mortgage-js").removeClass("act");
     $(".bunner-info-mortgage-js").addClass("act").fadeOut(200);
   }
 });

// --------------------------------------------
$(document).ready(function (e) {
    sliders();

  function sliders() {
    var tracks = ["-webkit-slider-runnable-track"];

    var thumbs = ["-webkit-slider-thumb"];

    initSliders();
    var sliderGroups = document.querySelectorAll(
      "section[data-type=slider-group]"
    );
    // for (var i = 0; i < sliderGroups.length; i += 1) {
    //   initSliderGroup(sliderGroups[i]);
    // }

    function initSliders() {
      var sliders = document.querySelectorAll("input[type=range]");
      var testAndWK = window.getComputedStyle(
        sliders[0],
        "::-webkit-slider-thumb"
      ).background;
      for (var i = 0; i < sliders.length; i += 1) {
        if (!testAndWK) {
          sliders[i].style.WebkitAppearance = "slider-horizontal";
        }

        // prepare a <style> tag that will be used by handleSlider()

        var st = document.createElement("style");
        st.id = "s" + sliders[i].id;
        document.head.appendChild(st);

        sliders[i].addEventListener(
          "input",
          function () {
            handleSlider(this);
          },
          false
        );
        sliders[i].addEventListener(
          "change",
          function () {
            handleSlider(this);
          },
          false
        );

        sliders[i].output = sliders[i].parentNode.querySelector("output");
        var dataSpan = sliders[i].parentNode.querySelector("span");
        if (dataSpan && dataSpan.getAttribute("data-labels")) {
          sliders[i].values = [];
          var values = dataSpan.getAttribute("data-labels").split(";");
          for (var j = 0; j < values.length; j += 1) {
            sliders[i].values.push(values[j]);
          }
        }

        if (sliders[i].value * 1) {
          handleSlider(sliders[i]);
        }
      }
    }

    function handleSlider(slider) {
      // this sets the gradient for one slider to the correct color stops
      // needs a prepared <style> tag created by initSliders()

      var gradValue = Math.round(
        (slider.value / slider.getAttribute("max")) * 1 * 100
      );
      var grad =
        "linear-gradient(90deg,#7AB764 " +
        gradValue +
        "%,#E5E5E5 " +
        (gradValue + 1) +
        "%)";
      var rangeSelector = "input[id=" + slider.id + "]::";
      var styleString = "";
      var printedValue = slider.values
        ? slider.values[slider.value]
        : slider.value;
      slider.output.innerHTML = printedValue;
      for (var j = 0; j < tracks.length; j += 1) {
        styleString +=
          rangeSelector + tracks[j] + "{background: " + grad + ";} ";
      }
      document.getElementById("s" + slider.id).textContent = styleString;
    }
  }
});

