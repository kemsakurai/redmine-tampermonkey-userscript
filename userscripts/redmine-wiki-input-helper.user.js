// ==UserScript==
// @name         Redmine's wiki input helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redmine の wiki  の入力補助するTampermonkey スクリプト
// @author       K.Sakurai
// @match        https://my.redmine.jp/**/wiki**
// @require       https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.5/mousetrap.min.js
// @resource    CSS1 https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @require       https://cdn.jsdelivr.net/npm/toastify-js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
(function() {
    'use strict';
    // CSS読み込み
    GM_addStyle(GM_getResourceText('CSS1'));
    var bindElems = [
        { key: 'alt+1', label:"目次(左寄せ)", text : '{{toc}}' },
        { key: 'alt+2', label:"目次(右寄せ)", text : '{{>toc}}' },
        { key: 'alt+3', label:'子ページの一覧を表示', text : '{{child_pages}}' },
        { key: 'alt+4', label:'Wikiページをインクルードして表示', text : '{{include(Foo)}}'},
        { key: 'alt+5', label:'画像のサムネイルを表示', text : '{{thumbnail(Foo.png)}}'},
        { key: 'alt+6', label:'折りたたみ表示', text : '{{collapse(詳細を表示...)\nこの部分はデフォルトでは折り畳まれた状態で表示されます。\nリンクをクリックすると展開されます。\n}}' },
        { key: 'alt+q', label:'引用', text : 'bq.'},
        { key: 'alt+w', label:'コードハイライト(Java)', text : '<pre>\n<code class="java">\nPlace you code here.\n</code>\n</pre>'},
        { key: 'alt+e', label:'コードハイライト(SQL)', text : '<pre>\n<code class="sql">\nPlace you code here.\n</code>\n</pre>'},
        { key: 'alt+r', label:'コードハイライト(JavaScript)', text : '<pre>\n<code class="javascript">\nPlace you code here.\n</code>\n</pre>'},
    ];
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var headerRow = document.createElement("tr");
    headerRow.setAttribute("style", "border-width: thin; border-style: solid;");
    headerRow.appendChild(createThElement("key"));
    headerRow.appendChild(createThElement("description"));
    headerRow.appendChild(createThElement("value"));
    tblBody.appendChild(headerRow);
    // creating all cells
    for (var  i =0;  i  < bindElems.length;  i++) {
        var elem = bindElems[i];
        // creates a table row
        var row = document.createElement("tr");
        row.setAttribute("style", "border-width: thin; border-style: solid;");
        row.appendChild(createTdElement(elem.key));
        row.appendChild(createTdElement(elem.label));
        row.appendChild(createTdElement(elem.text));
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    var caption = document.createElement("caption");
    var captionText = document.createTextNode("Help");
    caption.appendChild(captionText);
    tbl.appendChild(tblBody);
    tbl.appendChild(caption);
    tbl.setAttribute("style", "border-width: thin; border-style: solid;");

    Mousetrap.bind('alt+h', function() {
        Toastify({
            text: "Menu",
            node: tbl,
            duration: 5000,
            gravity: "bottom", // `top` or `bottom`
            position: 'right', // `left`, `center` or `right`
        }).showToast();
    });

    for (var  j =0;  j  < bindElems.length;  j++){
        var count = j;
        Mousetrap.bind(bindElems[j].key, function() {
            copyToClipBoardFrom(this.text);
            noticeMessage(escapeHtml(this.text));
        }.bind(bindElems[j]));
    }

    // メッセージ通知
    function noticeMessage(text) {
        Toastify({
            text: 'Copy macro "'+ text + '"',
            duration: 3000,
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
    function createTdElement(value) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(value);
        cell.appendChild(cellText);
        cell.setAttribute("style", "border-width: thin; border-style: solid;");
        return cell;
    }
    function createThElement(value) {
        var cell = document.createElement("th");
        var cellText = document.createTextNode(value);
        cell.appendChild(cellText);
        cell.setAttribute("style", "border-width: thin; border-style: solid;");
        return cell;
    }
    function escapeHtml(string) {
        if(typeof string !== 'string') {
            return string;
        }
        return string.replace(/[&'`"<>]/g, function(match) {
            return {
                '&': '&amp;',
                "'": '&#x27;',
                '`': '&#x60;',
                '"': '&quot;',
                '<': '&lt;',
                '>': '&gt;',
            }[match]
        });
    }    
})();
