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

        alert(myName + " we have received your message.Thank you for reaching out to us.");

    });
    event.preventDefault();
});