$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navBar").addClass("sticky");
    } else {
      $(".navBar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide scroll script

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // menu script

  $(".menu-btn").click(function () {
    $(".navBar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // owl carousel script 



  // typing script

  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Freelancer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Freelancer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  
});
