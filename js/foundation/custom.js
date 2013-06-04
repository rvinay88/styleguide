$(document).ready(function(){
  // This is for toggling selectable elements. Appends the class selected 
  $(".selectable").click(function(){
      $(this).toggleClass("selected");  
  }); 
  // Triggering the reveal section when user clicks back and next 
  $("#next").click(function () {
		$("#products").trigger('click');
	});
})