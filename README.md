# redmine-tampermonkey-userscript

Tampermonkey userscript collection to assist redmine UI operation

----

## Installation

1. prerequisites  

* This user script has been tested on the latest version of Chrome. It may or may not work in other browsers.  

* This user script has been confirmed to work on [the Redmine demo site](https://my.redmine.jp/demo/). It may not work with versions of Redmine older than the demo site.

2. Make sure you have user scripts enabled in your browser (these instructions refer to the latest versions of the browser):  

	* Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome).

3. Get information or install:
	* Learn more about the userscript by clicking on the named link. You will be taken to the specific help page.
	* Install a script directly from GitHub by clicking on the "install" link in the table below.  

	| Userscript Wiki                        | Direct<br>Install | Created    | Updated     |
	|----------------------------------------|:------------------:|----------:|:----------:|
	| [Add SearchBox To Redmine][asr-help]   | [install][asr-raw] | 2020.10.18 | 2020.10.19|
    | [Auto execute Redmine Ganttchart Grep Bookmarklet][aer-help]| [install][aer-raw] | 2020.10.18 | 2020.10.19|
    | [Copy Page Link for Textile][cpl-help] | [install][cpl-raw] | 2020.10.18 | 2020.10.19|
    | [Copy Redmine's issue template][cri-help] | [install][cri-raw] | 2020.10.19 | 2020.10.19|
    | [Display Redmine'wiki for Print][drw-help] | [install][drw-raw] | 2020.10.18 | 2020.10.19|


[asr-help]: #Add-SearchBox-To-Redmine
[aer-help]: #Auto-execute-Redmine-Ganttchart-Grep-Bookmarklet
[cpl-help]: #Copy-Page-Link-for-Textile
[cri-help]: #Copy-Redmine's-issue-template
[drw-help]: #Display-Redmine'wiki-for-Print

[asr-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/add-search-box-to-redmine.user.js
[aer-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/auto-execute-redmine-ganttchart-grep-bookmarklet.user.js
[cpl-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/copy-page-link-for-textile.user.js
[cri-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/copy-redmine-issue-template.user.js
[drw-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/display-redmine-wiki-for-print.user.js

----

## Updating  

Userscripts are set up to automatically update. You can check for updates from within the Tampermonkey menu, or click on the install link again to get the update.  

----

## Help  

----

### Add SearchBox To Redmine  

A user script that adds a search box at the bottom of the pull-down that increases the number of selection items in Redmine.  

* **Target field (id specified)**    
    * Wiki  
        1. Parent page  
        [![Image from Gyazo](https://i.gyazo.com/7b1c925250854b02c1233c996950518f.png)](https://gyazo.com/7b1c925250854b02c1233c996950518f)

    * Issues
        1. Add filter  
        [![Image from Gyazo](https://i.gyazo.com/1514cc05b72303bb5203c6c23228ea45.png)](https://gyazo.com/1514cc05b72303bb5203c6c23228ea45)    
        2. Assignee,Category,Target version  
        [![Image from Gyazo](https://i.gyazo.com/d6aa0f2f27a36b71ad61f36b5f41caa0.png)](https://gyazo.com/d6aa0f2f27a36b71ad61f36b5f41caa0)

    * Gantt
        1. Add filter  
        [![Image from Gyazo](https://i.gyazo.com/725dac5d433571d80b96acd78bdc7684.png)](https://gyazo.com/725dac5d433571d80b96acd78bdc7684)  

* **Setting**  
    Please modify the description of @match in the user script for your Redmine.  
    ```javascript
    // @match        https://my.redmine.jp/**/issues/*
    // @match        https://my.redmine.jp/**/wiki/*
    ```

* **References**  
    * [プルダウンリストの項目を検索選択するためのBookmarklet - どこかのだれかへ](https://tepp.hatenablog.jp/entry/2017/04/05/215756)  

----

### Auto execute Redmine Ganttchart Grep Bookmarklet  

UserScript to start [redmine ganttchart grep bookmarklet](https://github.com/amanoese/redmine-ganttchart-grep-bookmarklet) on the target page.

* **References**  
    * [amanoese/redmine-ganttchart-grep-bookmarklet: redmine ganttchart grep bookmarklet](https://github.com/amanoese/redmine-ganttchart-grep-bookmarklet)
    * [Redmineのガントチャート画面でツリー表示のまま検索する - Qiita](https://qiita.com/amanoese/items/edcc2226a6d52cc9598a)   

----

### Copy Page Link for Texttile  

Copy the URL of the web page you are viewing as a link string in Textile format.  
You to click the right mouse button and run from the context menu.  

[![Image from Gyazo](https://i.gyazo.com/0508f12918ec783877318ec0f679c6c6.gif)](https://gyazo.com/0508f12918ec783877318ec0f679c6c6)  

* **Setting**  
When copying the URL on your Redmine, you may need the URL with the domain part of the URL removed.
Please change the following description in the user script and execute the URL replacement process.
```javascript
    //  ここは、サイト分記載して修正する
    var  mySites = ["https://my.redmine.jp"];
    // mySites と一致する文字列は、空文字に置換する(ドメインルートからの絶対パスにしたい)
    for (var i = 0; i < mySites.length;  i++) {
         href = href.replace(mySites[i], '');
    }
```

* **References**  
    * [タイトルとURLを色々なフォーマットでコピーできるブックマークレット | デザインとWeb開発とその他諸々。 MEDIA-MASSAGE](https://media-massage.net/blog/linkbookmarklet/)

----

### Copy Redmine's issue template

UserScript to copy and paste Redmine issue template with keyboard shortcut.  

[![Image from Gyazo](https://i.gyazo.com/8c63b096d907b18e28a6cb0e96f7160d.gif)](https://gyazo.com/8c63b096d907b18e28a6cb0e96f7160d)

* **Keyboard shortcuts**  

|Keyboard shortcuts|Description|
|:-----------------|:----------|
|Alt + t 1|Copy request ticket template|
|Alt + t 2|Copy measures ticket template|
|Alt + t 3|Copy bug ticket template|
|Alt + t 4|Copy question ticket template|
|Alt + t h|Open this Help Url link|

* **References**
    * [Redmineのチケットの内容にテンプレを挿入するブックマークレット - Qiita](https://qiita.com/YoshikiIto/items/d10ed4c9c02a14c48ee7)
    * [課題のテンプレートのサンプル集 – Backlog ヘルプセンター](https://support-ja.backlog.com/hc/ja/articles/360036146353-%E8%AA%B2%E9%A1%8C%E3%81%AE%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%81%AE%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E9%9B%86)  

----

### Display Redmine'wiki for Print

UserScript to display Redmine wiki for printing.  
You to click the right mouse button and run from the context menu.  

[![Image from Gyazo](https://i.gyazo.com/015dfbc4be75fcc5803c993d0e54dc8a.gif)](https://gyazo.com/015dfbc4be75fcc5803c993d0e54dc8a)  

* **References**  
    * [RedmineのWikiページをそのまま印刷するためのブックマークレット | ハックノート](https://hacknote.jp/archives/10621/)


### 
