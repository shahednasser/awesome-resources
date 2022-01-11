$(document).ready(function () {
  const themeToggler = $(".theme-toggler"),
    scrollUp = $(".scroll-up");

  function setTheme (toDark) {
    if (toDark) {
      themeToggler.removeClass('fa-sun').addClass('fa-moon');
      $("body").addClass("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggler.removeClass('fa-moon').addClass('fa-sun');
      $("body").removeClass("dark");
      localStorage.setItem('theme', 'light')
    }
  }

  function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  }

  function toggleScrollButton() {
    var threshold = 200;
    if ($(window).scrollTop() > threshold) {
      scrollUp.fadeIn("slow");
    } else {
      scrollUp.fadeOut("slow");
    }
  }

  scrollUp.click(scrollToTop);
  $(window).scroll(toggleScrollButton);

  //load default theme
  setTheme(localStorage.getItem('theme') === 'dark');
  
  themeToggler.on('click', () => setTheme(!themeToggler.hasClass('fa-moon')));
});