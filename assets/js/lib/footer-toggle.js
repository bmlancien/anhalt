import $ from 'jquery';

var footerHidden = false;

$('#footer--hide').click(function() {

  if (!footerHidden) {

    $('.map-footer').animate({height: '2rem'}, 200, 'swing');
    $('#mapid').animate({height: 'calc(100% - 2rem)'}, 200, 'swing');
    $('#footer-legal').css('display', 'none');
    $('#footer-logos').css('display', 'none');

    footerHidden = true;

  } else {

    $('.map-footer').animate({height: '9rem'}, 200, 'swing');
    $('#mapid').height('calc(100% - 9rem)');
    $('#footer-legal').css('display', 'block');
    $('#footer-logos').css('display', 'block');

    footerHidden = false;
  }
});