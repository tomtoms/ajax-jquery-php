<?php
if(isset($_POST['fname']) && isset($_POST['lname'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $string = $fname."<br />".$lname;
    echo $string;    
}

?>
