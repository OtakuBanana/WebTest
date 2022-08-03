$(function(){
    $('.MainHead .navbar-brand').css({
        fontSize: "3rem",
        letterSpacing: "1rem",
        transform: "translateX(80rem)"
    });
    $(window).scroll(function(){
        var scrollTop　=　document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 0){
            $('.scrollTop').css({
                left: "80%",
                opacity: 1
            });
        }
        else{
            // $('.MainHead .navbar-brand').css({
            //     fontSize: "2rem",
            //     letterSpacing: 0,
            //     transform: "translateX(0)"
            // });
            $('.scrollTop').css({
                left: "110%",
                opacity: 0
            });
        }
        $('.scrollTop').click(function() {
            $('html').scrollTop(0);
        });
    });
});