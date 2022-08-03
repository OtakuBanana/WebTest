function login() {
    var logDiv = document.getElementById('logDiv');
    var menu = document.getElementById('Menus');
    var mask = document.getElementById('mask');
    menu.style.opacity = 0;
    mask.style.visibility = "visible";
    logDiv.style.opacity = 1;
    logDiv.style.visibility = "visible";
    logDiv.style.transform = "translateY(50px)";
    logDiv.style.transition = ".3s";
}
function register() {
    var regDiv = document.getElementById('regDiv');
    var menu = document.getElementById('Menus');
    var mask = document.getElementById('mask');
    menu.style.opacity = 0;
    mask.style.visibility = "visible";
    regDiv.style.opacity = 1;
    regDiv.style.visibility = "visible";
    regDiv.style.transform = "translateY(50px)";
    regDiv.style.transition = ".3s";
}
function escBtn() {
    var logDiv = document.getElementById('logDiv');
    var regDiv = document.getElementById('regDiv');
    var menu = document.getElementById('Menus');
    var mask = document.getElementById('mask');
    menu.style.opacity = 1;
    mask.style.visibility = "hidden";
    logDiv.style.opacity = 0;
    logDiv.style.visibility = "hidden";
    logDiv.style.transform = "translateY(0px)";
    regDiv.style.transform = "translateY(0px)";
    logDiv.style.transition = ".3s";
    regDiv.style.transition = ".3s";
}
function escBtns() {
    var logDiv = document.getElementById('logDiv');
    var regDiv = document.getElementById('regDiv');
    var menu = document.getElementById('Menus');
    var mask = document.getElementById('mask');
    menu.style.opacity = 1;
    mask.style.visibility = "hidden";
    regDiv.style.opacity = 0;
    regDiv.style.visibility = "hidden";
    regDiv.style.transform = "translateY(0px)";
    logDiv.style.transform = "translateY(0px)";
    regDiv.style.transition = ".3s";
    logDiv.style.transition = ".3s";
}
function linkLog() {
    var logDiv = document.getElementById('logDiv');
    var regDiv = document.getElementById('regDiv');
    logDiv.style.opacity = 1;
    logDiv.style.visibility = "visible";
    logDiv.style.transition = "0s";
    logDiv.style.transform = "translateY(50px)";
    regDiv.style.opacity = 0;
    regDiv.style.visibility = "hidden";
    regDiv.style.transform = "translateY(50px)";
    regDiv.style.transition = "0s";
}
function linkReg() {
    var regDiv = document.getElementById('regDiv');
    var logDiv = document.getElementById('logDiv');
    regDiv.style.opacity = 1;
    regDiv.style.visibility = "visible";
    regDiv.style.transition = "0s";
    regDiv.style.transform = "translateY(50px)";
    logDiv.style.opacity = 0;
    logDiv.style.visibility = "hidden";
    logDiv.style.transform = "translateY(50px)";
    logDiv.style.transition = "0s";
}
function logSuccess() {
    document.getElementById('admBtn').style.visibility = "visible";
    document.getElementById('esc').style.visibility = "visible";
    document.getElementById('admBtn').style.opacity = 1;
    document.getElementById('esc').style.opacity = 1;
    document.getElementById('logBtn').style.visibility = "hidden";
    document.getElementById('regBtn').style.visibility = "hidden";
    document.getElementById('logBtn').style.opacity = 0;
    document.getElementById('regBtn').style.opacity = 0;
}
function escSuccess() {
    document.getElementById('admBtn').style.visibility = "hidden";
    document.getElementById('esc').style.visibility = "hidden";
    document.getElementById('admBtn').style.opacity = 0;
    document.getElementById('esc').style.opacity = 0;
    document.getElementById('logBtn').style.visibility = "visible";
    document.getElementById('regBtn').style.visibility = "visible";
    document.getElementById('logBtn').style.opacity = 1;
    document.getElementById('regBtn').style.opacity = 1;
    alert("用户已退出！");
}