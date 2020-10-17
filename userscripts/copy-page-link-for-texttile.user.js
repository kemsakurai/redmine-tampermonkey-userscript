// ==UserScript==
// @name         Copy Page Link for Texttile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  閲覧しているページをTexttile形式にコピーする
// @author       K.Sakurai
// @run-at       context-menu
// ==/UserScript==
(function() {
    'use strict';
    var href = location.href;
    //  ここは、サイト分記載して修正する
    var  mySites = ["https://my.redmine.jp"];
    // mySites と一致する文字列は、空文字に置換する(ドメインルートからの絶対パスにしたい)
    for (var i = 0; i < mySites.length;  i++) {
         href = href.replace(mySites[i], '');
    }
    var text = '"' + document.title.replace(/"/g, '')+'":' + href;
    var temp = document.createElement('div');
    temp.appendChild(document.createElement('pre')).textContent = text;
    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';
    document.body.appendChild(temp);
    document.getSelection().selectAllChildren(temp);
    var result = document.execCommand('copy');
    document.body.removeChild(temp);
})();
