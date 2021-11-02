window.lucybot.formatDatetime = function(date) {
  return date.getTime() / 1000;
}

$(window).on('load', function() {
  console.log('init...');
  $('input.g-search-box').on('input', function() {
    window.globalSearch($(this).val());
  });
  if (window.location.pathname.indexOf('/api-docs') === 0) {
    $('.subnav.subnav-apis').addClass('active');
  } else if (window.location.pathname.indexOf('/services') === 0) {
    $('.subnav.subnav-services').addClass('active');
  } else {
    $('.subnav.subnav-guides').addClass('active');
  }

  /*
  $('.nav-tabs-b>span').on('click', function(evt) {
    evt.preventDefault();
    if (!$(this).hasClass('active')) {
      $('.nav-tabs-b>span').removeClass('active');
      $(this).addClass('active');
    }
    // nav
    window.markdownNavigation($(this).attr('data-to'));
  });*/

  $('.side-menu-toggle').on('click', function() {
    window.toggleSideMenu();
  });
});
