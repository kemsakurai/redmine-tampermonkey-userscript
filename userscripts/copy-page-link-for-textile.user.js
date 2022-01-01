// ==UserScript==
// @name         Copy Page Link for Textile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  閲覧しているWebページのURLをTextile形式でコピーする
// @author       K.Sakurai
// @match        http*://*/*
// @grant        GM_setClipboard
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
    GM_setClipboard(text);
})();
