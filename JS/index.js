$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $('#privacidade').hover(function () {
        $('#privacidade .chip').toggleClass('red-text lighten-2');
    });

    $('#clientes').hover(function () {
        $('#clientes .chip').toggleClass('red-text lighten-2');
    });

    if ($('#windowSize').css('padding') == '4px') {
        //        console.log('entrou');
        $('#intro').css('background-image', "url(edudata/IMAGES/wallpapers/introTeste.jpg)");
    }
    if ($('#windowSize').css('padding') == '6px') {
        $('#intro').css('background-image', "url(edudata/IMAGES/wallpapers/introTeste.jpg)");
    }
    if ($('#windowSize').css('padding') == '8px' || $('#windowSize').css('padding') == '10px') {
        $('#intro').css('background-image', "url(../IMAGES/wallpapers/intro.jpg)");
    }

    $(window).resize(function () {
        if ($('#windowSize').css('padding') == '4px') {
            //            console.log('entrou');
            $('#intro').css('background-image', "url(edudata/IMAGES/wallpapers/introTeste.jpg)");
        }
        if ($('#windowSize').css('padding') == '6px') {
            $('#intro').css('background-image', "url(edudata/IMAGES/wallpapers/introTeste.jpg)");
        }
        if($('#windowSize').css('padding') == '8px' || $('#windowSize').css('padding') == '10px'){
            $('#intro').css('background-image', "url(edudata/IMAGES/wallpapers/intro.jpg)");
        }
    });

});
