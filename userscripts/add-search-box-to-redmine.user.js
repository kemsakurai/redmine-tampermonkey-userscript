// ==UserScript==
// @name         Add SearchBox To Redmine
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RedmineのWikiの名称変更ページと、チケットのページ、ganttチャートのプルダウンに検索ボックスを追加する
// @author       K.Sakurai
// @match        https://my.redmine.jp/**/issues/*
// @match        https://my.redmine.jp/**/wiki/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var q=String.fromCharCode(39);
    var s=document.getElementsByTagName('SELECT');
    for(var i=0;i<s.length;i++) {
        var a = document.createElement('div');s[i].parentNode.insertBefore(a,s[i].nextSibling);a.innerHTML='<input style="background-color: #AFEEEE"onkeyup="var s=document.getElementsByTagName('+q+'SELECT'+q+')['+i+'];if(!s.a){var original=s.options;s.a=new Array(original.length);for(var i=0;i<s.a.length;i++){s.a[i]=s.options.item(i);}}s.length=0;for(var i=0;i<s.a.length;i++){if(-1!=(s.a[i].text).toLowerCase().indexOf(this.value)){s[s.length]=s.a[i];}}if(this.value.length==0){s.a=null};">';
    }
})();
