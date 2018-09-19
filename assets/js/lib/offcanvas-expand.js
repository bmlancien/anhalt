import $ from 'jquery';


var expanded = false;

$('#btnExpand').on('click', function() {
    
  if (!expanded) {
    $('#offCanvas').width('100%');
    $('#offCanvasContent').width('100%');
    $('#btnCloseOffcanvas').css('visibility', 'hidden');

    expanded= true;

  } else {
    $('#offCanvas').width('35rem');
    $('#offCanvasContent').width('30rem');
    $('#btnCloseOffcanvas').css('visibility', 'visible');

    expanded= false;
  }
})


$("[data-tabs]").on('change.zf.tabs', function(event){
    $('#offCanvas').width('35rem');
    $('#offCanvasContent').width('30rem');
    $('#btnCloseOffcanvas').css('visibility', 'visible');
})