// ==UserScript==
// @name         Copy Redmine's issue template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redmine の issue テンプレートをコピーするTampermonkey スクリプト
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
        { key: 'alt+t 1', label: "依頼チケットテンプレート",  text : requestTicketTemplate, func:  noticeSetIssueTemplate},
        { key: 'alt+t 2', label: "施策チケットテンプレート",  text : measuresTicketTemplate, func:  noticeSetIssueTemplate },
        { key: 'alt+t 3', label: "バグチケットテンプレート",  text : bugTicketTemplate, func:  noticeSetIssueTemplate },
        { key: 'alt+t 4', label: "質問チケットテンプレート",  text : questionTicketTemplate , func:  noticeSetIssueTemplate}
    ];

    Mousetrap.bind('alt+t h', function() {
        Toastify({
            text: "Copy Redmine's issue template Help",
            destination: "https://github.com/kemsakurai/redmine-tampermonkey-userscript",
            close: true,
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
