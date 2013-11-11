$(document).ready(function(){
    $('input[name="submit"]').click(function(){
        var fname = $('input[name="fname"]').val();
        var lname = $('input[name="lname"]').val(); 

        $.ajax({
            type: 'POST',
            url: 'getname.ajax.php',
            data: {fname:fname, lname:lname},
            success: function(response){
               console.log(response);
               // YOUR OWN LOGIC
               $('#response').append(response);
            }

        });

    }); 
});
