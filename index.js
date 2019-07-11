$(document).ready(function() {
  $(window).scroll(function() {
    var positionTop = $(document).scrollTop();
    console.log(positionTop);
    if (positionTop > 60 && positionTop < 150) {
      $(".animation").addClass("animated");
    }
  });
  $("#button").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#footer").offset().top
    }, 2000);
  });
  $("#button1").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#pricing").offset().top
    }, 2000);
  });
  $("#button2").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#cta").offset().top
    }, 2000);
  });
});
// var $window = $(window);
// var $elem = $(".animation")
//
// function isScrolledIntoView($elem, $window) {
//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();
//
//     var elemTop = $elem.offset().top;
//     var elemBottom = elemTop + $elem.height();
//
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }
// $(document).on("scroll", function () {
//     if (isScrolledIntoView($elem, $window)) {
//         $elem.addClass("animated")
//     }
// });
