function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
}

function toggleScrollButton() {
  var threshold = 200;
  if ($(window).scrollTop() > threshold) {
    $("#scroll-up").fadeIn("slow");
  } else {
    $("#scroll-up").fadeOut("slow");
  }
}

$(document).ready(function () {
  $("#scroll-up").click(scrollToTop);
  $(window).scroll(toggleScrollButton);
});
