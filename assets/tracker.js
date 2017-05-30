(function() {
  window.lucybot.tracker = function(name, properties) {
    mixpanel.track(name, properties);
    ga('send', {
      hitType: 'event',
      eventCategory: name,
      eventAction: name,
      eventLabel: name,
      eventValue: JSON.stringify(properties),
    });
  }
})();
