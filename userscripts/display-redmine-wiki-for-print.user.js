// ==UserScript==
// @name         Display redmine'wiki for Print
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RedmineのWikiを印刷用に加工する
// @author       K.Sakurai
// @run-at       context-menu
// ==/UserScript==
(function() {
    'use strict';
    if(location.href.indexOf('wiki') == -1) {
        return;
    }
    $("#header").remove();
    $("#top-menu").remove();
    $(".contextual").remove();
    $(".breadcrumb").remove();
    $("#wiki_add_attachment").remove();
    $(".other-formats").remove();
    $("#footer").remove();
    $("#sidebar").remove();
    $(".attachments").remove();
    $("#content").width("100%");
    $(".wiki-anchor").remove();
    $("a").each(function(){child=this.childNodes;$(this).replaceWith(child);});
})();
