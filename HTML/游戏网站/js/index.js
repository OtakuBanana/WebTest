$(function(){
    $('.login').css("transform", "translateY(20rem)");
    $('.register').css("transform", "translateY(20rem)");
    $(window).scroll(function(){
        var scrollTop　=　document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 0){
            $('.MainHead').css("transform","translateY(-60px)");
            $('.MainHead .navbar-brand').css({
                fontSize: "3rem",
                letterSpacing: "1rem",
                transform: "translateX(80rem)"
            });
            $('.scrollTop').css({
                left: "80%",
                opacity: 1
            });
        }
        else{
            $('.MainHead').css("transform","translateY(0px)");
            $('.MainHead .navbar-brand').css({
              fontSize: "2rem",
              letterSpacing: 0,
              transform: "translateX(0)"
            });
            $('.scrollTop').css({
              left: "110%",
              opacity: 0
            });
        }
        $('.scrollTop').click(function() {
          $('html').scrollTop(0);
        });
    });

    $('#btnLog').click(function() {
        $('.login').css("display", "block");
        $('.register').css("display", "none");
    });
    $('#btnReg').click(function() {
        $('.register').css("display", "block");
        $('.login').css("display", "none");
    });
    $('#btnEsc').click(function() {
        $('.login').css("display", "none");
        $('.register').css("display", "none");
    });
    $('#btnEscs').click(function() {
        $('.register').css("display", "none");
    });

    
    $('#goRegister').click(function() {
      $('.login').css("display", "none");
      $('.register').css("display", "block");
  });
  $('#goLogin').click(function() {
      $('.register').css("display", "none");
      $('.login').css("display", "block");
  });

  var user = "123";
  var pwd = "123";

  $('#btnLogin').click(function() {
      if($('#userLogin').val() == "") {
          alert("用户名为空！");
      }
      else if($('#userLogin').val() != user) {
          alert("用户名不存在！");
      }
      else if($('#pwdLogin').val() == "") {
          alert("密码为空！");
      }
      else if($('#pwdLogin').val() != pwd) {
          alert("密码错误！");
      }
      else if(($('#userLogin').val() == user) && ($('#pwdLogin').val() != pwd)) {
          alert("密码错误！");
      }
      else if(($('#userLogin').val() == user) && ($('#pwdLogin').val() == pwd)) {
          alert("登入成功！");
          window.location = "html/vip.html";
      }
  });

  $('#btnRegister').click(function() {
      if($('#userRegister').val() == "") {
          alert("用户名为空！");
      }
      else if($('#pwdRegister').val() == "") {
          alert("密码为空！");
      }
      else if($('#pwdsRegister').val() == "") {
          alert("请重复输入一次密码！");
      }
      else if($('#pwdRegister').val() != $('#pwdsRegister').val()) {
          alert("两次输入的密码不一致！");
      }
      else {
          user = $('#userRegister').val();
          pwd = $('#pwdRegister').val();
          alert("注册成功！");
          $('.register').css("display", "none");
          $('.login').css("display", "block");
      }
  });
});