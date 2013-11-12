<?php
if(isset($_POST['fname']) && isset($_POST['lname'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $string = 'First name: '.$fname."<br /> Last name: ".$lname;
    echo $string;    
}

?>
