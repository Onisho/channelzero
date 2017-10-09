$(document).ready(function() {
  
  // open links in external window
  $("a[rel=external]").click(function() {
	 window.open($(this).attr('href'));
	 return false;
  });
  
  // bricklayer.js on media page
  var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))
  setTimeout( function() { bricklayer.redraw(); }, 3000);
  
  
});