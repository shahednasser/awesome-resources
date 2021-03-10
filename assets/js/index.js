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
  const sun = document.getElementById('sun')
  const moon = document.getElementById('moon')
  const nav = document.getElementById('nav')
  const burgerMenu = document.getElementById('burgerMenu')
  if(document.getElementById('toggleCheckBox').checked){
    document.body.style.background = `${darkBlack}`
    document.body.style.color = 'snow'
    header.style.background = `${lightBlack}`
    footer.style.background = `${lightBlack}`
    nav.style.background = '#3e4040de'
    burgerMenu.style.background = `${lightBlack}`
    moon.classList.add('yellow')
    sun.classList.remove('yellow')
  }else{
    document.body.style.background = 'snow'
    document.body.style.color = 'black'
    header.style.background = `${mainColor}`
    footer.style.background = `${footerColor}`
    nav.style.background = '#75C9C8de'
    burgerMenu.style.background = `${mainColor}`
    sun.classList.add('yellow')
    moon.classList.remove('yellow')
  }
}

$(document).ready(function () {
  const header = document.getElementById('header')
  const footer = document.getElementById('footer')
  $("#scroll-up").click(scrollToTop);
  $(window).scroll(toggleScrollButton);
  $('#toggleCheckBox').change(toggleTheme)
});