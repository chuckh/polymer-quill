(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var demo = document.querySelector('#disableToggleButtton');
  // app.title = 'HD Cleaner';


  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    console.log('WebComponentsReady',demo,document);

  });

  function disableToggle(event) {
    console.log('disableToggle');
    // #disableToggleButtton

  }



  // app.cleanView = function() {
  //   app.route = 'home';
  //   document.querySelector('section[data-route="' + app.route + '"]').focus();
  // };


})(document);
