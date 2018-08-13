import $ from 'jquery';

// changes text when different radio button is checked
// for scenario panel
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