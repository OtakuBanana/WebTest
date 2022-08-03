<?php
    $server="localhost";
    $db_username="root";
    $db_password="root";

    $con = mysqli_connect($server,$db_username,$db_password);
    if(!$con){
        die("can't connect".mysqli_error());
    }
    
    mysqli_select_db($con,'test');
?>