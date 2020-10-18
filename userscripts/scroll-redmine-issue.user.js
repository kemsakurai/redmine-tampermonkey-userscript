// ==UserScript==
// @name         Scroll Redmine issue
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redmine の issue のスクロールを補助する
// @author       K.Sakurai
// @match        https://my.redmine.jp**issues/**
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
    function  scrollToComments(elem) {
        if(location.href.indexOf('/issues/new') != -1) {
             return;
        }
        var ne = document.getElementById("issue_notes");
        var issueNoes = ne;
        if (!ne) { 
            ne = document.getElementById("notes");
        }
        if (ne) { 
            ne.style.height = "500px"; 
        }
        if (issueNoes) {
            showAndScrollTo("update", "issue_notes");
        }
        if(ne){ 
            ne.focus();
        }
    }
    function scrollToIssueDescription(elem) {
        var iD = null;
        if(location.href.indexOf('/issues/new') != -1) {
            iD = document.getElementById("issue_description");
            if (iD != null){ iD.style.height = "500px"; iD.focus() };
            return;
        }
        var ne = document.getElementById("issue_notes");
        if (ne) {
            showAndScrollTo("update", "issue_notes");
        }
        
        var iDAT = document.getElementById("issue_description_and_toolbar");
        if (iDAT) {
            $(iDAT).show();
        }
        iD = document.getElementById("issue_description");
        if (iD != null) { 
            iD.style.height = "500px";
            iD.focus()
        };
    }
    var bindElems = [
        { key: 'alt+s c', label: "コメント欄へ移動",  text : '-', func: scrollToComments },
        { key: 'alt+s d', label: "チケット内容欄へ移動",  text : '-', func: scrollToIssueDescription },
    ];

    for (var  j =0;  j  < bindElems.length;  j++){
        Mousetrap.bind(bindElems[j].key, function() {
             this.func(this);
        }.bind(bindElems[j]));
    }
    Mousetrap.bind('alt+s h', function() {
       Toastify({
            text: "scroll-redmine-issue.user.js [Help]",
            destination: "https://github.com/kemsakurai/redmine-tampermonkey-userscript#copy-redmine-code-highlighting-format",
            newWindow: true,
            close: true,
            duration: 5000,
            gravity: "bottom", // `top` or `bottom`
            position: 'right', // `left`, `center` or `right`
        }).showToast();
     });
})();
