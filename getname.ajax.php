<?php
if(isset($_POST['fname']) && isset($_POST['lname'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $string = '<p>First name: '.$fname."</p> <p>Last name: ".$lname." </p>";
    echo $string;    
}
else
{
    echo 'Error !';
}

?>
