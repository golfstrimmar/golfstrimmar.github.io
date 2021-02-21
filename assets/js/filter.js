// ------------------------------------------------

$(document).ready(function (e) {
let titleTab = $(".filterDep-title-js");

titleTab.on("click", function () {
let dropTab = $(this).siblings(".filterDep-drop-js");
let imgTab = $(this).find(".filterDep-img-js");
let parent = $(this).closest(".filter__item")


if($(this).hasClass("act")){
  dropTab.slideUp(200);
  $(this).removeClass("act");
  imgTab.css("transform", "rotate(0deg)");
}else{
  $(this).addClass("act");
  imgTab.css("transform", "rotate(-180deg)");
  dropTab.slideDown(200);
    parent.siblings(".filter__item").find(".filterDep-drop-js").slideUp(200);
    parent.siblings(".filter__item").find(".filterDep-title-js").removeClass("act");
    parent
      .siblings(".filter__item")
      .find(".filterDep-img-js")
      .css("transform", "rotate(0deg)");
}

});



 $(document).mouseup(function (e) {
   // событие клика по веб-документу
   var div = $(".filter"); // тут указываем ID элемента
   if (
     !div.is(e.target) && // если клик был не по нашему блоку
     div.has(e.target).length === 0
   ) {
     // и не по его дочерним элементам
     $(".filterDep-drop-js").slideUp(200);
     $(".filterDep-title-js").removeClass("act");
     $(".filterDep-img-js").css("transform", "rotate(0deg)");
   }
 });














})

