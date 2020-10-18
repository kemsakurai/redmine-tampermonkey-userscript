// ==UserScript==
// @name         Redmine's issue input helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redmine の issue  の入力補助するTampermonkey スクリプト
// @author       K.Sakurai
// @match        https://my.redmine.jp/**/issues/**
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
    function noticeSetIssueTemplate(elem) {
           document.getElementById("issue_description").value = document.getElementById("issue_description").value + elem.text;
            noticeMessage("チケットテンプレートを設定しました");
    }

    function  noticeCreateTextTileTable(elem) {
            document.getElementById("issue_notes").value = convertSheetValueToTextTileTable(document.getElementById("issue_notes").value);
            noticeMessage("texttile形式に変換しました");
    }

    function noticeCopyToClipBoard(elem) {
             copyToClipBoardFrom(elem.text);
             noticeMessage('クリップボードに "'+ escapeHtml(elem.text) + '" をコピーしました。');
    }

    function  scrollToComments(elem) {
        if(location.href.indexOf('/issues/new') != -1) {
             return;
        }
        var ne = document.getElementById("issue_notes");if (ne == null){ ne = document.getElementById("notes"); };if (ne != null){ ne.style.height = "400px"; };
        showAndScrollTo("update", "issue_notes");if (ne != null){ ne.focus(); }
    }

    function scrollToIssueProerties(elem) {
        var iD = null;
        if(location.href.indexOf('/issues/new') != -1) {
            iD = document.getElementById("issue_description");
            if (iD != null){ iD.style.height = "600px"; iD.focus() };
            return;
        }
        showAndScrollTo("update", "issue_notes");i
        $(this).hide(); $("#issue_description_and_toolbar").show();
        iD = document.getElementById("issue_description");
        if (iD != null){ iD.style.height = "600px"; iD.focus() };
    }

    var bugTicketTemplate =  "\n" +
        "h2. バグの概要\n\n(本来ならこう振る舞うべきという内容)\n\n"  +
        "h2. 再現方法\n\n(再現手順、実際に行った手順を書きます。)\n\n" +
        "h2. 期待した結果\n\n(本来ならこう振る舞うべきという内容)\n\n" +
        "h2. 実際の結果\n\n(不具合の内容、表示崩れ等であれば画面のスクリーンショットを添付ファイルとして追加してください)\n\n";

    var measuresTicketTemplate = "\n" +
        "h2. 概要\n\n(この施策の概要を具体的に書きます)\n\n"  +
        "h2. 目的\n\n(この施策の目的やゴールを書きます)\n\n"  +
        "h2. 完了条件\n\n(この施策の完了の条件を詳細に書きます)\n\n"  +
        "h2. 数値目標\n\n(施策の数値目標があるの場合記載します)\n\n"  +
        "h2. スケジュール\n\n(親課題として全体のスケジュール感を共有したい場合に記述します)\n\n" +
        "h2. 関連課題\n\n(関連チケット番号を記載)";

    var requestTicketTemplate = "\n"  +
        "h2. 依頼内容\n\n(依頼内容を具体的に記述します)\n\n"  +
        "h2. その他\n\n（このセクションは課題追加時に削除してください）\n\n"  +
        "* 担当者を設定してください。\n"  +
        "* 期限日は必ず設定してください。\n";

    var questionTicketTemplate = "\n"  +
        "h2. 質問内容\n\n(質問内容を具体的に記述します)\n\n"  +
        "h2. 質問背景\n\n(質問自体が解決できなくても、背景がわかれば第替案を掲示できることがあります)\n\n"  +
        "h2. 関連資料\n\n(資料があればURLやURIを記載してください。)\n\n";

    var bindElems = [
        { key: 'alt+q 1', label: "依頼チケットテンプレート",  text : requestTicketTemplate, func:  noticeSetIssueTemplate},
        { key: 'alt+q 2', label: "施策チケットテンプレート",  text : measuresTicketTemplate, func:  noticeSetIssueTemplate },
        { key: 'alt+q 3', label: "バグチケットテンプレート",  text : bugTicketTemplate, func:  noticeSetIssueTemplate },
        { key: 'alt+q 4', label: "質問チケットテンプレート",  text : questionTicketTemplate , func:  noticeSetIssueTemplate},
        { key: 'alt+c 1' ,label: "スプレッドシート からコピーした値をtexttileに変換",  text : '-' , func: noticeCreateTextTileTable},
        { key: 'alt+1', label: "コードハイライト(Java)",  text : '<pre>\n<code class="java">\nPlace you code here.\n</code>\n</pre>', func: noticeCopyToClipBoard},
        { key: 'alt+2', label: "コードハイライト(SQL)",  text : '<pre>\n<code class="sql">\nPlace you code here.\n</code>\n</pre>', func: noticeCopyToClipBoard },
        { key: 'alt+3', label: "コードハイライト(JavaScript)",  text : '<pre>\n<code class="javascript">\nPlace you code here.\n</code>\n</pre>', func: noticeCopyToClipBoard },
        { key: 'alt+s 1', label: "コメント欄へ移動",  text : '-', func: scrollToComments },
        { key: 'alt+s 2', label: "チケット内容欄へ移動",  text : '-', func: scrollToIssueProerties },
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
        var result = document.execCommand('copy');
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
    function convertSheetValueToTextTileTable(str) {
        str = str.replace(/\r\n/g, '\n');
        str = str.replace(/\r/g, '\n');
        var wqlist = str.split("\"");
        var brs = str.split("\n");
        var colfirst = 1;
        var result = "";
        var num = 0;
        if(str == null || str == "") {
            return "";
        }
        for (var i=0;i<brs.length;i++) {
            if(brs[i].length==0){
                break;
            }
            var words = brs[i].split("\t");

            var word = "";
            for(var j=0;j<words.length;j++) {
                if(j==0) {
                    word = "|" + word;
                }
                word = word + strbr(words[j],num);
                word = word + "|";
            }
            brs[i] = word;
        }
        for (var m=0; m<brs.length; m++) {
            result = result + brs[m];
            result = result + "\r\n";
        }
        return result;
    }
    function strbr(word,num) {
        if(num < 1){
            return word;
        }
        var ret = "";
        var now = 0;
        for(var i=0;i<word.length;i=i+num){
            if (word.length-i <= num) {
                ret = ret + word.substr(i,word.length-i);
                break;
            } else {
                ret = ret + word.substr(i,num)+"&br;";
            }
        }
        return ret;
    }
})();
