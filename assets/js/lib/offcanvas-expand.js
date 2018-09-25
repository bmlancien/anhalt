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

$('#btnExpand').on('click', function() {
    
  if (!expanded) {
    toggleWidth('100%', '100%');
    expanded= true;

  } else {
    toggleWidth('35rem', '30rem');
    expanded= false;
  }
})

$("[data-tabs]").on('change.zf.tabs', function(){
  toggleWidth('35rem', '30rem');
});

$('#btnCloseOffcanvas').on('click', function(){
  offCanvasOpacity(0, 500);
});

$('#openOffCanvas').on('click', function() {
  offCanvasOpacity(100, 500);
})
