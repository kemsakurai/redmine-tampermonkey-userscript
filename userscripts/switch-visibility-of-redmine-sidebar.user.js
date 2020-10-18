// ==UserScript==
// @name         Switch visibility of Redmine sidebar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description Redmine のサイドバーの表示・非表示を切り替える
// @author         K.Sakurai
// @match         https://my.redmine.jp/**/issues*
// @match         https://my.redmine.jp/**/wiki/*
// @require       https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.5/mousetrap.min.js
// @grant          none
// ==/UserScript==
(function() {
    'use strict';
    var storageKey = 'Switch visibility of Redmine sidebar';
    var defaultState = localStorage.getItem(storageKey);
    if(defaultState == "hide") {
        $("#sidebar").hide();
    } else {
        $("#sidebar").show();
    }
    Mousetrap.bind('alt+right', function() {
        $("#sidebar").hide();
        localStorage.setItem(storageKey, "hide");
    });
    Mousetrap.bind('alt+left', function() {
        $("#sidebar").show();
        localStorage.setItem(storageKey, "show");
    });
})();
