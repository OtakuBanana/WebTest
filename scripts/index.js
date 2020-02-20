let myButton = document.querySelector('button');
let myHeading = document.querySelector('#welcome');
function setUserName() {
    let myName = prompt('请输入用户名：');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '欢迎' + myName + '访问本站 ';
    }
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎' + storedName + '访问本站 ';
  }
myButton.onclick = function() {
    setUserName();
}

$(function(){
    //屏幕高度自适应
    // $("body").height($(window).height());
    //侧滑
    $("#menu").click(function(){
      if(!$(this).hasClass("on")){
          $(this).addClass("on");
          $(".animate").removeClass("fadeOutLeft").addClass("fadeInRight");
      }
      else{
          $(this).removeClass("on");
          $(".animate").removeClass("fadeInRight").addClass("fadeOutLeft");
      }
    });
})

document.querySelector('#buttons1').onclick = function() {
  alert('我真的一滴都没有了！');
}
document.querySelector('#buttons2').onclick = function() {
  alert('我真的一滴都没有了！');
}
document.querySelector('#buttons3').onclick = function() {
  alert('我真的一滴都没有了！');
}

document.querySelector('#imgbutton1').onclick = function() {
  window.open("images/QQSYS.jpg");
}
document.querySelector('#imgbutton2').onclick = function() {
  window.open("images/WXSYS.jpg");
}
document.querySelector('#imgbutton3').onclick = function() {
  window.open("https://weibo.com/5834503808/profile?rightmod=1&wvr=6&mod=personinfo");
}

$(function() {
var video = document.getElementsByTagName("video");
  for ( var i in video) {
  var e = video[i];
    (function(i) {
    $(e).bind('play', function() {
      for ( var j in video) {
        if (j != i) {
          document.getElementById(j).pause();
          document.getElementById(j).currentTime=0
          }
        }
      });
    })(i);
  }
});