$(document).ready(function(){
    $('input[name="submit"]').click(function(){
        var fname = $('input[name="fname"]').val();
        var lname = $('input[name="lname"]').val(); 

        $.ajax({
            type: 'POST',
            url: 'getname.ajax.php',
            data: {fname:fname, lname:lname},
			beforeSend: function() { 
				//EXECUTES BEFORE SENDING THE REQUEST
				 //console.log('SENDING'); //debug
			},
			error: function(xhr, ajaxOptions, thrownError) {  
				//EXECUTES UPON ERROR
				 //console.log('ERROR'); //debug
			},
            success: function(response){
			   //EXECUTES UPON SUCCESS
               //console.log(response); //debug
               $('#response').append(response);
            }

        });

    }); 
});
