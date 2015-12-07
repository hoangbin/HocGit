$(document).ready(function(){
    (function($) {
    $(function() { //on DOM ready
  
      $("#sl_mv").simplyScroll({
              orientation: 'horizontal',
              auto: true,
              manualMode: 'loop',
              speed: 2
          });
    });
  })(jQuery);
    $("#sl_mv02").owlCarousel({
 
    //Basic Speeds
    slideSpeed : 200,
    loop: true,
    pagination: true,
    navigation: true,
    responsive: true,
    items : 3,
    itemsDesktop : [1199,3],
    itemsTablet: [768,1],
    itemsMobile : [480,1],
    })

    $("#sl_cont01").owlCarousel({
 
    //Basic Speeds
    slideSpeed : 200,
    loop: true,
    pagination: true,
    navigation: true,
    responsive: true,
    margin:50,
    items : 3,
    itemsDesktop : [1199,3],
    itemsTablet: [768,1],
    itemsMobile : [480,1],
    })


     $("#sl_cont02").owlCarousel({
    //Basic Speeds
    slideSpeed : 200,
    loop: true,
    pagination: true,
    navigation: true,
    responsive: true,
    items : 6,
    itemsDesktop: false,
    itemsTablet: [768,2],
    itemsMobile : [480,2], 
  })

     $("#sl_cont03").owlCarousel({
    //Basic Speeds
    slideSpeed : 200,
    loop: true,
    pagination: true,
    navigation: true,
    responsive: true,
    items : 6,
    itemsDesktop: false,
    itemsTablet: [768,2],
    itemsMobile : [480,2], 
  })

  $("#sl_cont04").owlCarousel({
 
    //Basic Speeds
    slideSpeed : 200,
    loop: true,
    pagination: true,
    navigation: true,
    responsive: true,
    items : 3,
    itemsDesktop : [1199,3],
    itemsTablet: [768,1],
    itemsMobile : [480,1],
    })

  $("#sl_cont05").owlCarousel({
 
    //Basic Speeds
    slideSpeed : 200,
    loop: true,
    pagination: true,
    navigation: true,
    responsive: true,
    items : 2,
    itemsDesktop : [1199,2],
    itemsTablet: [768,1],
    itemsMobile : [480,1],
    })
});
