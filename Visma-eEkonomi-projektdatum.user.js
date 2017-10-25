// ==UserScript==
// @name        Visma eEkonomi Projekt Datum
// @namespace   https://eaccounting.vismaonline.com/
// @include     https://eaccounting.vismaonline.com/*
// @version     1
// @grant       none
// ==/UserScript==

/* Copyright 2017 Emil Hemdal */
/* License AGPLv3 (see LICENSE file) */

// Används för att sätta projekt start och slut för projekt
var startDate = '2017-05-01';
var endDate = '2018-04-30';

var appArea = null;
var shellAreaContent = document.getElementById('shellAreaContent');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(document.getElementById('app-content') != null) {
      appArea = document.getElementById('app-content');
      observer.disconnect();
      appAreaObserver.observe(appArea, config);
    }
  });    
});

var appAreaObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(document.getElementById('projectFromDateCheckbox_input') != null) {
      var changeEvent = new Event('change', { 'bubbles': true });
      var blurEvent = new Event('blur', { 'bubbles': true });
      var keyDownEvent = new Event('keydown', { 'bubbles': true });
      var keyUpEvent = new Event('keyup', { 'bubbles': true });
      document.getElementById('projectFromDateCheckbox_input').value = startDate;
      document.getElementById('projectToDateCheckbox_input').value = endDate;
      document.getElementById('projectFromDateCheckbox_input').dispatchEvent(changeEvent);
      document.getElementById('projectToDateCheckbox_input').dispatchEvent(changeEvent);
      document.getElementById('projectFromDateCheckbox_input').dispatchEvent(blurEvent);
      document.getElementById('projectToDateCheckbox_input').dispatchEvent(blurEvent);
      document.getElementById('projectFromDateCheckbox_input').dispatchEvent(keyDownEvent);
      document.getElementById('projectToDateCheckbox_input').dispatchEvent(keyDownEvent);
      document.getElementById('projectFromDateCheckbox_input').dispatchEvent(keyUpEvent);
      document.getElementById('projectToDateCheckbox_input').dispatchEvent(keyUpEvent);
    }
  });    
});

var config = { childList: true, subtree: true };

observer.observe(shellAreaContent, config);
