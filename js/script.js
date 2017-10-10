$(document).ready(function() {
  
  // open links in external window
  $("a[rel=external]").click(function() {
	 window.open($(this).attr('href'));
	 return false;
  });
  
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.navbar').css('margin-top', '0');
    }
  });
  
  $('.chocolat-parent').Chocolat();
  
  
  
  
});