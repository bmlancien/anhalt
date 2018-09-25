import $ from 'jquery';


var expanded = false;

var toggleWidth = function(offCanvasWidth, offCanvasContentWidth) {
  $('#offCanvas').animate({width: offCanvasWidth}, 500);
  $('#offCanvasContent').animate({width: offCanvasContentWidth}, 500);
};

var offCanvasOpacity = function(op, duration) {
  $('#offCanvas').animate({opacity: op}, duration);
  $('.tabs-panel').animate({opacity: op}, duration);
}

var btnExpandText = function(expanded) {
  if (expanded) {
    $('#btnExpand').html('Weniger Ergebnisse <i class ="icon ion-chevron-left icon--small"></i>');
  } else {
    $('#btnExpand').html('Mehr Ergebnisse <i class ="icon ion-chevron-right icon--small"></i>');
  }
}

// expands or reduces off-canvas
$('#btnExpand').on('click', function() {
    
  if (!expanded) {
    toggleWidth('100%', '100%');
    expanded= true;

  } else {
    toggleWidth('35rem', '30rem');
    expanded= false;
  }

  // changes btn text
  btnExpandText(expanded);
})

// makes sure that clicking on another tab will reduce the off-canvas width if the off-canvas is expanded to 100%
$("[data-tabs]").on('change.zf.tabs', function(){
  toggleWidth('35rem', '30rem');
});

// some elements were not disappearing completely when clicking on expanded off-canvas close button (x)
// makes sure all elements fade away
$('#btnCloseOffcanvas').on('click', function(){
  offCanvasOpacity(0, 500);
});

// makes sure all faded elements become visible when opening off-canvas
$('#openOffCanvas').on('click', function() {
  offCanvasOpacity(1, 500);
})
