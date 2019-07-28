$(document).ready(function() {
    $("#title1").hide();
    $("#title2").hide();
    $("#title3").hide();
    $("#desiPara").hide();
    $("#devPara").hide();
    $("#proPara").hide();
});

$(document).ready(function() {
    $("#icon1,label").click(function() {
        $("#icon1").hide();
        $("label").hide();
        $("#title1").show();
        $("#desiPara").show();
    });
    $("#desiPara").click(function() {
        $("#title1").hide();
        $("#desiPara").hide();
        $("#icon1").show();
        $("label").show();
    });
})
$(document).ready(function() {
    $("#icon2,label").click(function() {
        $("#icon2").hide();
        $("label").hide();
        $("#title2").show();
        $("#devPara").show();
    });
    $("#devPara").click(function() {
        $("#title2").hide();
        $("#devPara").hide();
        $("#icon2").show();
        $("label").show();
    });
})
$(document).ready(function() {
    $("#product").click(function() {
        $("img#icon3").toggle();
        $("label#icon3").toggle();
        $("h4#title3").toggle();
        $("p#proPara").toggle();
    });
})

$(document).ready(function() {
    $("#contactUs").submit(function(event) {
        var myName = $("#name").val();
        var myEmail = $("#email").val();
        var comment = $("#textarea").val();

        alert(myName + " ,we have received your message.Thank you for reaching out to us.");

    });
    event.preventDefault();
});
$(document).ready(function() {
    $("#work4").mouseover(function() {
        $("#pWork4").show();
    });
    $("#work4").mouseleave(function() {
        $("#pWork4").hide();
    });


    $("#work3").mouseover(function() {
        $("#pWork3").show();
    });
    $("#work3").mouseleave(function() {
        $("#pWork3").hide();
    });


    $("#work2").mouseover(function() {
        $("#pWork2").show();
    });
    $("#work2").mouseleave(function() {
        $("#pWork2").hide();
    });


    $("#work1").mouseover(function() {
        $("#pWork1").show();
    });
    $("#work1").mouseleave(function() {
        $("#pWork1").hide();
    });


    $("#work5").mouseover(function() {
        $("#pWork5").show();
    });
    $("#work5").mouseleave(function() {
        $("#pWork5").hide();
    });


    $("#work6").mouseover(function() {
        $("#pWork6").show();
    });
    $("#work6").mouseleave(function() {
        $("#pWork6").hide();
    });


    $("#work7").mouseover(function() {
        $("#pWork7").show();
    });
    $("#work7").mouseleave(function() {
        $("#pWork7").hide();
    });


    $("#work8").mouseover(function() {
        $("#pWork8").show();
    });
    $("#work8").mouseleave(function() {
        $("#pWork8").hide();
    });


});