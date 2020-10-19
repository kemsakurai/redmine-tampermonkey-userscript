// ==UserScript==
// @name         Copy Redmine Wiki Macro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RedmineのwikiのMacroをクリップボードにコピーするTampermonkeyスクリプト 
// @author       K.Sakurai
// @match        https://my.redmine.jp/**/wiki**
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

    // Help keyboard short cut 
    Mousetrap.bind('alt+w h', function() {
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
        { key: 'alt+w 1', message:'目次(左寄せ){{toc}}をコピーしました。', text : '{{toc}}' },
        { key: 'alt+w 2', message:'目次(右寄せ)"{{>toc}}"をコピーしました。', text : '{{>toc}}' },
        { key: 'alt+w 3', message:'子ページの一覧を表示"{{child_pages}}"をコピーしました。', text : '{{child_pages}}' },
        { key: 'alt+w 4', message:'Wikiページをインクルードして表示"{{include(Foo)}}"をコピーしました。', text : '{{include(Foo)}}'},
        { key: 'alt+w 5', message:'画像のサムネイルを表示{"{thumbnail(Foo.png)}}"をコピーしました。', text : '{{thumbnail(Foo.png)}}'},
        { key: 'alt+w 6', message:'折りたたみ表示"{{collapse}"をコピーしました。', text : '{{collapse(詳細を表示...)\nこの部分はデフォルトでは折り畳まれた状態で表示されます。\nリンクをクリックすると展開されます。\n}}' },
        { key: 'alt+w q', message:'引用"bq."をコピーしました。', text : 'bq.'}
    ];

    for (var  j =0;  j  < bindElems.length;  j++){
        Mousetrap.bind(bindElems[j].key, function() {
            copyToClipBoardFrom(this.text);
            noticeMessage(this.message);
        }.bind(bindElems[j]));
    }

    // メッセージ通知
    function noticeMessage(text) {
        Toastify({
            text: text,
            duration: 5000,
            gravity: "bottom", // `top` or `bottom`
            position: 'right', // `left`, `center` or `right`
        }).showToast();
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
        var result = document.execCommand('copy');
        document.body.removeChild(temp);
    }
})();