
// navigation logo scroll top
$('.logo').on('click', function(e) {
  e.preventDefault();
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
  $('html, body').animate({
    scrollTop: 0
  }, 750, 'easeInOutQuad')
});

// achors link
$('a[href^="#"]').on('click', function(event) {

  var $target = $(this.getAttribute('href'));

  if($target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top
    }, 750, 'easeInOutQuad');
  }
});

// toggle hamburger and colapse navbar
$('.nav-toggle').on('click', function() {
  $(this).toggleClass('open');
  $('.menu-left').toggleClass('collapse');
});
// remove and collapse nav on click 
$('.menu-left a').on('click', function() {
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
});

// show/hide navigation
  // hide Header on on scroll down
  var userDidScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      userDidScroll = true;
  });

  setInterval(function() {
      if (userDidScroll) {
          hasScrolled();
          userDidScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('show-nav').addClass('hide-nav');
          $('.nav-toggle').removeClass('open');
          $('.menu-left').removeClass('collapse');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('hide-nav').addClass('show-nav');
          }
      }

      lastScrollTop = st;
  }

