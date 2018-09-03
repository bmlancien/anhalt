import $ from 'jquery';

var footerHidden = false;

$('#footer--hide').click(function() {

  if (!footerHidden) {

    $('.map-footer').height('2.5rem');
    $('#mapid').height('calc(100% - 2.5rem)');
    $('#footer-legal').css('display', 'none');
    $('#footer-logos').css('display', 'none');

    $("#footer--hide__icon").replaceWith("<i class=\"icon ion-chevron-up\" id=\"footer--hide__icon\"></i>");

    footerHidden = true;

  } else {

    $('.map-footer').height('8rem');
    $('#mapid').height('calc(100% - 8rem)');
    $('#footer-legal').css('display', 'block');
    $('#footer-logos').css('display', 'block');

    $("#footer--hide__icon").replaceWith("<i class=\"icon ion-chevron-down\" id=\"footer--hide__icon\"></i>");

    footerHidden = false;
  }
});