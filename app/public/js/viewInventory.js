$(document).ready(function(){
	//console.log('ohh.... hellooo');

	  $.ajax({
      type: 'GET',
      dataType: "json",
      url: '/batData', 
      success: function(bats) {
        
        bats.forEach(function(bat) {

          $('.batResults').append('<div>Model: ' + bat.model + ' <br /> Weight: ' + bat.weight + ' <br />Price: ' + bat.price + ' <br />Year: ' + bat.year + '</div><br /><br />');
        });
        
     }
   });

});