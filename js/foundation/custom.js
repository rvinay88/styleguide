$(document).ready(function(){
  // This is for toggling selectable elements. Appends the class selected 
  $(".selectable").click(function(){
      $(this).toggleClass("selected");  
  }); 
  // Triggering the reveal section when user clicks Next 
  $("#next-products").click(function () {
		$("#products").trigger('click');
	});
})