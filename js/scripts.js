$(document).ready(function() {
    $('#title1').hide();
    $('#title2').hide();
    $('#title3').hide();
    $('#desiPara').hide();
    $('#devPara').hide();
    $('#proPara').hide();
});

$(document).ready(function() {
    $('#design').click(function() {
        $('img#icon1').toggle();
        $('label#icon1').toggle();
        $('h4#title1').toggle();
        $('p#desiPara').toggle();
    });
});
$(document).ready(function() {
    $('#dev').click(function() {
        $('img#icon2').toggle();
        $('label#icon2').toggle();
        $('h4#title2').toggle();
        $('p#devPara').toggle();
    });
});
$(document).ready(function() {
    $('#product').click(function() {
        $('img#icon3').toggle();
        $('label#icon3').toggle();
        $('h4#title3').toggle();
        $('p#proPara').toggle();
    });
});

$(document).ready(function() {
    $('#contactUs').submit(function(event) {
        var myName = $('#name').val();
        var myEmail = $('#email').val();
        var comment = $('#textarea').val();

        if (myName === '' || myEmail === '' || comment === '') {
            alert('Please fill in the required data');
        } else {
            alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
        }
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#textarea').val('');
    });
});
$(document).ready(function() {
    $('#work4').mouseover(function() {
        $('#pWork4').show();
    });
    $('#work4').mouseleave(function() {
        $('#pWork4').hide();
    });

    $('#work3').mouseover(function() {
        $('#pWork3').show();
    });
    $('#work3').mouseleave(function() {
        $('#pWork3').hide();
    });

    $('#work2').mouseover(function() {
        $('#pWork2').show();
    });
    $('#work2').mouseleave(function() {
        $('#pWork2').hide();
    });

    $('#work1').mouseover(function() {
        $('#pWork1').show();
    });
    $('#work1').mouseleave(function() {
        $('#pWork1').hide();
    });

    $('#work5').mouseover(function() {
        $('#pWork5').show();
    });
    $('#work5').mouseleave(function() {
        $('#pWork5').hide();
    });

    $('#work6').mouseover(function() {
        $('#pWork6').show();
    });
    $('#work6').mouseleave(function() {
        $('#pWork6').hide();
    });

    $('#work7').mouseover(function() {
        $('#pWork7').show();
    });
    $('#work7').mouseleave(function() {
        $('#pWork7').hide();
    });

    $('#work8').mouseover(function() {
        $('#pWork8').show();
    });
    $('#work8').mouseleave(function() {
        $('#pWork8').hide();
    });
});