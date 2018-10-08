import $ from 'jquery';

// expand canvas only for medium and large screens
if ($(window).width() >= 640) {

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
      $('#btnExpand').html('Weniger Ergebnisse <i class ="icon ion-android-remove icon--small"></i>');
    } else {
      $('#btnExpand').html('Mehr Ergebnisse <i class ="icon ion-android-add icon--small"></i>');
    }
  }

/*
  // expands or reduces off-canvas width
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
  */

  $('#tabsScenarios').on('click', function() {
    toggleWidth('35rem', '30rem');
  })

  $('#tabsEnergy').on('click', function() {
    toggleWidth('35rem', '30rem');
  })

  $('#tabsAreas').on('click', function() {
    toggleWidth('35rem', '30rem');
  })

  $('#tabsResults').on('click', function() {
    toggleWidth('100%', '100%');
  })

/*
  // makes sure that clicking on another nav tab will reduce the off-canvas width if the off-canvas is expanded to 100%
  $("[data-tabs]#offcanvas-tabs").on('change.zf.tabs', function(){
    toggleWidth('35rem', '30rem');

    // changes btn text if needed
    btnExpandText(false);
  });
  */

  // some elements were not disappearing completely when clicking on expanded off-canvas close button (x)
  // makes sure all elements fade away
  $('#btnCloseOffcanvas').on('click', function(){
    offCanvasOpacity(0, 500);
  });

  // makes sure all faded elements become visible when opening off-canvas
  $('#openOffCanvas').on('click', function() {
    offCanvasOpacity(1, 500);
  })
}
