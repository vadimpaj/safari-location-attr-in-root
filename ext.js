// ==UserScript==
// @name        Add site location for Safari custom CSS
// @name:ru     Адрес сайта в data-атрибуте
// @description Adds data-attribute of current site location
// @description:ru Добавление адреса сайта в data-атрибут для доступа к нему из CSS в кастомных стилях для Safari
// @namespace   https://github.com/vadimpaj
// @author      vadimpaj
// @update      https://github.com/vadimpaj/safari-location-attr-in-root/raw/main/ext.js
// @version     1.0
// @match       *://*/*
// @grant       none

// ==/UserScript==
(function () {
  'use strict';

  function addDataLocationAttribute() {
    document.documentElement.setAttribute(
      'data-location',
      window.location.hostname
    );
  }

  document.addEventListener('DOMContentLoaded', addDataLocationAttribute);
})();
