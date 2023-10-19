$(document).ready(function(){
    var show = true;
    $("#tutorial").click(function(){
        $("#tutorial2").show(100);
        if(show){
           $("#tutorial2").show(100);
           show = false;
        }else{
            $("#tutorial2").hide(100);
            show = true;
        }
     });
     $("#button").click(function(){
        $(".responsive").show(200);
        $("h2").hide(10);
        $("#button").hide(10);
     });
});