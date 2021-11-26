/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */

    // to top right away
    if ( window.location.hash ) scroll(0,0);
    // void some browsers issue
    setTimeout( function() { scroll(0,0); }, 1);
  
      (function ($) {
      "use strict"; // Start of use strict
  
      // your current click function
      $('.scroll').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top + 'px'
          }, 1000, 'swing');
      });
  
      // *only* if we have anchor on the url
      if(window.location.hash) {
  
          // smooth scroll to the anchor id
          $('html, body').animate({
              scrollTop: $(window.location.hash).offset() + 'px'
          }, 1400, 'swing');
      }
  
      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
          if (
              location.pathname.replace(/^\//, "") ==
                  this.pathname.replace(/^\//, "") &&
              location.hostname == this.hostname
          ) {
              var target = $(this.hash);
              target = target.length
                  ? target
                  : $("[name=" + this.hash.slice(1) + "]");
              if (target.length) {
                  $("html, body").animate(
                      {
                          scrollTop: target.offset().top,
                      },
                      1000,
                      "easeInOutExpo"
                  );
                  return false;
              }
          }
      });
  
      $('.carousel').carousel();
  
      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function () {
          $(".navbar-collapse").collapse("hide");
      });
  
      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
          target: "#sideNav",
      });
  })(jQuery); // End of use strict