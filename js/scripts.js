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
    $("#icon3,label").click(function() {
        $("#icon3").hide();
        $("label").hide();
        $("#title3").show();
        $("#proPara").show();
    });
    $("#proPara").click(function() {
        $("#title3").hide();
        $("#proPara").hide();
        $("#icon3").show();
        $("label").show();
    });
})
$(document).ready(function() {
        $("#submit").hide();
    })
    // $(document).ready(function() {
    //     $("#blanks form").submit(function(event) {
    //         var blanks = ["name", "email", "msg"];

//         blanks.forEach(function(blank) {
//             var userInput = $("input#" + blank).val();
//             $("." + blank).text(userInput);
//         });

//         $("#submit").show();

//         event.preventDefault();
//     });
// });