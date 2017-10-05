$(document).ready(function() {
  
  // open links in external window
  $("a[rel=external]").click(function() {
	 window.open($(this).attr('href'));
	 return false;
  });
  
  
});