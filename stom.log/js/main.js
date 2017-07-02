
  // slider
  $(document).ready(function(){
    $('.slide').slick({
     autoplay: true,
     slidesToShow: 3,
     speed: 400,
     dots:false,
       responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
   });
  });
  
// nav menu
jQuery(document).ready(function($) {
// hide the menu when the page load
$("#navigation-list").hide();
// when .menuBtn is clicked, do this
$(".menuBtn").click(function() {
// open the menu with slide effect
$("#navigation-list").slideToggle(300);
});
});
