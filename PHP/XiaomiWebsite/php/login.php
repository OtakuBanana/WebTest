<?PHP
    header("Content-Type: text/html; charset=utf8");
    if(!isset($_POST["submit"])){
        exit("没有通过正确途径登入");
    }

    include('connect.php');
    $name = $_POST['name'];
    $passowrd = $_POST['password'];

    if ($name && $passowrd){
            $sql = "select * from user where username = '$name' and password='$passowrd'";
            $result = mysqli_query($con, $sql);
            $rows=mysqli_num_rows($result);
            if($rows){
                header("refresh:0; url=user.php");
                exit;
            }
            else {
                echo "<script>alert('用户名或密码错误');</script>";
                echo "
                    <script>
                            setTimeout(function(){window.location.href='../index.html';});
                    </script>";
            }
    }
    else {
        echo "<script>alert('用户名和密码不能为空');</script>";
        echo "
            <script>
                    setTimeout(function(){window.location.href='../index.html';});
            </script>";
    }

    mysqli_close($con);
?>