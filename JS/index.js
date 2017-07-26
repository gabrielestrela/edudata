$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $('#privacidade').hover(function () {
        $('#privacidade .chip').toggleClass('red-text lighten-2');
    });
    
    $('#clientes').hover(function(){
       $('#clientes .chip').toggleClass('red-text lighten-2'); 
    });
});
