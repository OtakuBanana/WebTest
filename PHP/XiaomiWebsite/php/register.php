<?php 
    header("Content-Type: text/html; charset=utf8");

    if(!isset($_POST['submit'])){
        exit("没有通过正确途径注册");
    }

    $name=$_POST['name'];
    $password=$_POST['password'];

    include('connect.php');
    $q="insert into user(id,username,password) values (null,'$name','$password')";
    $reslut=mysqli_query($con, $q);
    
    if (!$reslut){
        die('Error: ' . mysqli_error());
    }else{
        echo "<script>alert('注册成功');</script>";
        echo "
            <script>
                    setTimeout(function(){window.location.href='../index.html';});
            </script>

        ";
    }

    mysqli_close($con);
?>