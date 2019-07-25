$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".fa-angle-up").fadeIn();
        } else{
            $(".fa-angle-up").fadeOut();
        }
    });

    $("#to-top").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");    });  
});