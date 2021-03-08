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

// color variables
const lightBlack = '#3e4040'
const darkBlack = '#252626'
const mainColor = '#75C9C8'
const footerColor = '#f9f9f9'

function toggleTheme(){
  if(document.getElementById('toggleCheckBox').checked){
    document.body.style.background = `${darkBlack}`
    document.body.style.color = 'snow'
    header.style.background = `${lightBlack}`
    footer.style.background = `${lightBlack}`
  }else{
    document.body.style.background = 'snow'
    document.body.style.color = 'black'
    header.style.background = `${mainColor}`
    footer.style.background = `${footerColor}`
  }
}

$(document).ready(function () {
  const header = document.getElementById('header')
  const footer = document.getElementById('footer')
  $("#scroll-up").click(scrollToTop);
  $(window).scroll(toggleScrollButton);
  $('#toggleCheckBox').change(toggleTheme)
});