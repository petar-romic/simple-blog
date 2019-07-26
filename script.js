$(document).ready(function(){
    // to top button
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $("#to-top").fadeIn();
        } else{
            $("#to-top").fadeOut();
        }
    });

    $("#to-top").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");    }); 

    // switch active class nav bar
    $(".nav-link").click(function(e){
        e.preventDefault();
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    }); 
});