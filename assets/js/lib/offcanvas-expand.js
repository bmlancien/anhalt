import $ from 'jquery';


var expanded = false;

var toggleWidth = function(offCanvasWidth, offCanvasContentWidth, visibility) {
  $('#offCanvas').width(offCanvasWidth);
  $('#offCanvasContent').width(offCanvasContentWidth);
  $('#btnCloseOffcanvas').css('visibility', visibility);
}

$('#btnExpand').on('click', function() {
    
  if (!expanded) {
    toggleWidth('100%', '100%', 'hidden');
    expanded= true;

  } else {
    toggleWidth('35rem', '30rem', 'visible');
    expanded= false;
  }
})

$("[data-tabs]").on('change.zf.tabs', function(event){
  toggleWidth('35rem', '30rem', 'visible');
});

