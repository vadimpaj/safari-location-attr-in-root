// ==UserScript==
// @name        Add site location for Safari custom CSS
// @name:ru     Адрес сайта в data-атрибуте
// @description Adds data-attribute of current site location
// @description:ru Добавление адреса сайта в data-атрибут для доступа к нему из CSS в кастомных стилях для Safari
// @namespace   https://github.com/vadimpaj
// @author      vadimpaj
// @update      https://github.com/vadimpaj/safari-location-attr-in-root/raw/main/ext.js
// @version     1.1
// @match       *://*/*
// @grant       none

// ==/UserScript==
(function () {
  'use strict';

  // Function to add or update data-location attribute on the HTML element
  function addDataLocationAttributeToHtml() {
    const htmlElement = document.documentElement;
    let currentDomain = window.location.hostname;
        
    if (!htmlElement.hasAttribute('data-location')) {
      // If 'data-location' does not exist, create it with the current domain
      htmlElement.setAttribute('data-location', currentDomain);
    } else {
      // If 'data-location' already exists, update it to include the current domain if necessary
      let existingLocation = htmlElement.getAttribute('data-location');
      if (!existingLocation.includes(currentDomain)) {
        htmlElement.setAttribute('data-location', existingLocation + ' ' + currentDomain);
      }
    }
  }

  // Run the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', addDataLocationAttributeToHtml);

  // Optionally, you can run this script on every page load or navigation
  setInterval(addDataLocationAttributeToHtml, 5000); // Runs every 5 seconds
})();
