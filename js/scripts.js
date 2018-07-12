$(document).ready(function(){
    $('.link').on('click', function () {
        $('#modal-overlay, #overlay-wrapper').fadeIn(500);
    });
      $('#close').on('click', function () {
        $('#modal-overlay, #overlay-wrapper').fadeOut(500);
    });
    })