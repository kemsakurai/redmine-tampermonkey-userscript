// ==UserScript==
// @name         Convert spreadsheet value to texttile table
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  スプレッドシートの表形式のデータをtexttile のtable フォーマットに変換するTampermonkeyスクリプト
// @author       K.Sakurai
// @match        https://my.redmine.jp/**
// @resource     CSS1 https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @require      https://cdn.jsdelivr.net/npm/toastify-js
// @run-at       context-menu
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
(function() {
    'use strict';
    // CSS読み込み
    GM_addStyle(GM_getResourceText('CSS1'));
    var value = window.prompt("SpreadSheet の値を textileのtableに変換");
    if (value == null || value == "") {
        return;
    }
    var result = convertSheetValueToTextTileTable(value);
    copyToClipBoardFrom(result);
    noticeMessage("texttile形式に変換しました");
    
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

    function convertSheetValueToTextTileTable(str) {
        str = str.replace(/\r\n/g, '\n');
        str = str.replace(/\r/g, '\n');
        var brs = str.split("\n");
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
