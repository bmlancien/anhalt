import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import './lib/footer-toggle';
import './lib/jquery-ui';
import './lib/leaflet-map';
import './lib/radio-btn-checked';

import './lib/ion-range-slider';

$(document).foundation();

// forces offcanvas to open when page has loaded
$('#offCanvas').foundation('open');

