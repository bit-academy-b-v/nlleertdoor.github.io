$("document").ready(function () {

    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
      // ... more custom settings?
    });

    // Start Mobile Nav Function
    $(".hamburger-menu, .close-menu").click(function(){
      $(".mobile-nav").toggle();
    });
    // End Mobile Name


  });
