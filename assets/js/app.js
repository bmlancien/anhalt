import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// WIZARD START ----------------------------------------------

var mq = window.matchMedia('all and (max-width: 767px)');

if(mq.matches) {
    let progressBarList = document.querySelectorAll('.progressbar-li');
      progressBarList[0].innerHTML = '';
      progressBarList[1].innerHTML = '';
      progressBarList[2].innerHTML = '';
      progressBarList[3].innerHTML = '';
  }

// WIZARD END ----------------------------------------------


// NAVIGATION MOBILE START ---------------------------------------------
let menuHamburger = document.getElementById('menu-hamburger');
let topNavBar = document.getElementById('top-nav-bar');
let titleBarMobile = document.getElementById('title-bar-mobile');

// after loading
titleBarMobile.style.backgroundColor = 'transparent';

menuHamburger.addEventListener('click', function() {
    // no bg color when the menu is invisible
    if (topNavBar.style.display === 'none') {
        titleBarMobile.style.backgroundColor = 'transparent';
        // bg color when menu is visible
    } else {
        titleBarMobile.style.backgroundColor = '#002E4F';
    }
});
// NAVIGATION MOBILE END ---------------------------------------------

