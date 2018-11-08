import $ from 'jquery';

// after simulation is done
// replace click event with appropriate event
$('#simulation-btn').on('click', function() {

  // if user has already results panel open
  if (!$('#tabsResults').is('.is-active')) {
    $('#tabsResults > a').addClass('results-highlighted');
  }
});

// when user clicks on results tab
$('#tabsResults').on('click', function() {
  $('#tabsResults > a').removeClass('results-highlighted');
});