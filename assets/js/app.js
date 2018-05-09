import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// Makes btn div position fixed or relative according to the window and form div height
// START
function compareHeight() {
  let windowHeight = $( window ).height();
  let windowWidth = $( window ).width();
  let formHeight = $( '.scen-create__form' ).height();

  console.log(windowHeight);
  console.log(formHeight);

  if (windowHeight <= formHeight - 200 && windowWidth >= 1024 || windowHeight - 300 <= formHeight && windowWidth >= 640 && windowWidth < 1024 || windowHeight - 300 <= formHeight && windowWidth < 640) {
    $( '.scen-create__btn' ).css({ 'position': 'relative', 'width': '100%' });
  }
}

compareHeight();
// END 

// Only for small screens
// START
function onSmallScreen() {
  let windowWidth = $( window ).width();

  if (windowWidth < 640) {
    $('#nav-list-vertical').addClass('vertical');
  }
}

onSmallScreen();
// END
