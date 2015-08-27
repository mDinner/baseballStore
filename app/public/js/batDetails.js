$(document).ready(function(){
	//console.log('ohh.... hellooo');

  var path = window.location.pathname;
  var pathy = path.split("/");
  var id = pathy[2];

  path = '/batData/' + id;

	  $.ajax({
      type: 'GET',
      dataType: "json",
      url: path, 
      success: function(bat) {
        console.log('bat: ' + bat);
        alert('bat: ' + bat);
        


             }
   });

});