$(document).ready(function(){
   
    $(".gnb > li").mouseenter(function(){
        $(this).children("div").show();
    })
    
    
    $(".gnb > li").mouseleave(function(){
        $(this).children("div").hide();
    })

    
});