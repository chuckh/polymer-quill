(function(document) {
  'use strict';

  var demo = document.querySelectorAll('#disableToggleButtton');
  // app.title = 'HD Cleaner';
  window.addEventListener('save-change',saveChange(event))


  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    console.log('WebComponentsReady',demo,document);

  });

  function disableToggle(event) {
    console.log('disableToggle');
    // #disableToggleButtton

  }
  function saveChange(event) {
    console.log('saveChange',event);
    // #disableToggleButtton

  }

})(document);
