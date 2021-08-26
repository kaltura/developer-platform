window.lucybot.formatDatetime = function(date) {
  return date.getTime() / 1000;
}

$(window).on('load', function() {
  console.log('init...');
  $('input.g-search-box').on('input', function() {
    window.searchService.query = $(this).val();
    window.searchService.performSearch();
  });

  $('.nav-tabs-b>span').on('click', function(evt) {
    evt.preventDefault();
    if (!$(this).hasClass('active')) {
      $('.nav-tabs-b>span').removeClass('active');
      $(this).addClass('active');
    }
  });
});
