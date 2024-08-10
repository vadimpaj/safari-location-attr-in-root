// ==UserScript==
// @name        Add Domain to the document root data-attribute
// @name:ru     Адрес сайта в data-атрибуте
// @description Adds data-attribute of current domain to the document root for using in custom css
// @description:ru Добавление адреса сайта в data-атрибут для доступа к нему из CSS в кастомных стилях для Safari
// @namespace   https://github.com/vadimpaj
// @author      vadimpaj
// @update      https://github.com/vadimpaj/safari-location-attr-in-root/raw/main/ext.js
// @version     1.2
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Get the current domain
    const currentDomain = window.location.hostname;

    // Set the domain to the data-location attribute on the <html> element
    document.documentElement.setAttribute('data-location', currentDomain);
})();
