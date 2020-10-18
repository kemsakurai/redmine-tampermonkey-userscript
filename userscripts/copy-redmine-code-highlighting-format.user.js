// ==UserScript==
// @name         Copy Redmine code highlighting format
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redmine の issue  の入力補助するTampermonkey スクリプト
// @author       K.Sakurai
// @match        https://my.redmine.jp/**
// @require      https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.5/mousetrap.min.js
// @resource     CSS1 https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @require      https://cdn.jsdelivr.net/npm/toastify-js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
(function() {
    'use strict';
    // CSS読み込み
    GM_addStyle(GM_getResourceText('CSS1'));
    
    // Notice copied text
    function noticeCopyToClipBoard(elem) {
             copyToClipBoardFrom(elem.text);
             noticeMessage(elem.message);
    }
    // Help keyboard short cut 
    Mousetrap.bind('alt+c h', function() {
        Toastify({
            text: "copy-redmine-code-highlighting-format.user.js [Help]",
            destination: "https://github.com/kemsakurai/redmine-tampermonkey-userscript#copy-redmine-code-highlighting-format",
            newWindow: true,
            close: true,
            duration: 5000,
            gravity: "bottom", // `top` or `bottom`
            position: 'right', // `left`, `center` or `right`
        }).showToast();
    });

    var bindElems = [
        { key: 'alt+c j', message: "Javaのコードハイライトのテンプレートをコピーしました。",  text : '<pre>\n<code class="java">\nPlace you code here.\n</code>\n</pre>', func: noticeCopyToClipBoard},
        { key: 'alt+c J', message: "JavaScriptのコードハイライトのテンプレートをコピーしました。",  text : '<pre>\n<code class="javascript">\nPlace you code here.\n</code>\n</pre>', func: noticeCopyToClipBoard },
        { key: 'alt+c s', message: "SQLのコードハイライトのテンプレートをコピーしました。",  text : '<pre>\n<code class="sql">\nPlace you code here.\n</code>\n</pre>', func: noticeCopyToClipBoard }
    ];

    for (var  j =0;  j  < bindElems.length;  j++){
        Mousetrap.bind(bindElems[j].key, function() {
             this.func(this);
        }.bind(bindElems[j]));
    }

    // クリップボードにコピーする
    function copyToClipBoardFrom(text) {
        var temp = document.createElement('div');
        temp.appendChild(document.createElement('pre')).textContent = text;
        var s = temp.style;
        s.position = 'fixed';
        s.left = '-100%';
        document.body.appendChild(temp);
        document.getSelection().selectAllChildren(temp);
        document.execCommand('copy');
        document.body.removeChild(temp);
    }
    // メッセージ通知
    function noticeMessage(text) {
        Toastify({
            text: text,
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: 'right', // `left`, `center` or `right`
        }).showToast();
    }
})();
