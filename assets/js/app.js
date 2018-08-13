import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import './lib/leaflet-map';

$(document).foundation();

// forces offcanvas to open when page has loaded
$('#offCanvas').foundation('open');


$('input:radio[name="scenario"]').change(function(){

  $('#scenarioPanelText').empty();

  if (this.checked && this.value == 'statusQuo') {
    $('#scenarioPanelText')
    .append(
      '<span style="font-weight:700">Status Quo</span><span style="display:inline-block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>'
    );

  } else if (this.checked && this.value == 'germany') {
    $('#scenarioPanelText')
    .append(
      '<span style="font-weight:700">Deutsches Klimaschutzziel</span><span style="display:inline-block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>'
    );

  } else if (this.checked && this.value == '100') {
    $('#scenarioPanelText')
    .append(
      '<span style="font-weight:700">100% EE</span><span style="display:inline-block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>'
    );
  }
});

