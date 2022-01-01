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

	| Userscript Help                        | Direct<br>Install | Created    | Updated     |
	|----------------------------------------|:------------------:|----------:|:----------:|
	| [Add SearchBox To Redmine][asr-help]   | [install][asr-raw] | 2020.10.18 | 2020.10.19|
    | [Auto execute Redmine Ganttchart Grep Bookmarklet][aer-help]| [install][aer-raw] | 2020.10.18 | 2020.10.19|
    | [Convert spreadsheet value to texttile table][csv-help] | [install][csv-raw] | 2020.10.19 | 2022.01.01| 
    | [Copy Page Link for Textile][cpl-help] | [install][cpl-raw] | 2020.10.18 | 2022.01.01|
    | [Copy Redmine code highlighting format][crc-help] | [install][crc-raw] | 2020.10.19 | 2022.01.01|
    | [Copy Redmine wiki macro][crw-help] | [install][crw-raw] | 2020.10.19 | 2022.01.01|
    | [Copy Redmine's issue template][cri-help] | [install][cri-raw] | 2020.10.19 | 2020.10.19|
    | [Display Redmine'wiki for Print][drw-help] | [install][drw-raw] | 2020.10.18 | 2020.10.19|
    | [Scroll Redmine issue][sri-help] | [install][sri-raw] | 2020.10.19 | 2020.10.20 |
    | [Switch visibility of Redmine sidebar][svr-help] | [install][svr-raw] | 2020.10.19 | 2020.10.19 |

[asr-help]: #Add-SearchBox-To-Redmine
[aer-help]: #Auto-execute-Redmine-Ganttchart-Grep-Bookmarklet
[crc-help]: #Copy-Redmine-code-highlighting-format
[cri-help]: #Copy-Redmine's-issue-template
[crw-help]: #Copy-Redmine-wiki-macro
[cpl-help]: #Copy-Page-Link-for-Textile
[csv-help]: #Convert-spreadsheet-value-to-texttile-table
[drw-help]: #Display-Redmine'wiki-for-Print
[sri-help]: #Scroll-Redmine-issue
[svr-help]: #Switch-visibility-of-Redmine-sidebar

[asr-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/add-search-box-to-redmine.user.js
[aer-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/auto-execute-redmine-ganttchart-grep-bookmarklet.user.js
[csv-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/convert-spreatsheetvalue-to-texttile-table.user.js
[crc-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/copy-redmine-code-highlighting-format.user.js
[cpl-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/copy-page-link-for-textile.user.js
[cri-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/copy-redmine-issue-template.user.js
[crw-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/copy-redmine-wiki-macro.user.js
[drw-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/display-redmine-wiki-for-print.user.js
[sri-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/scroll-redmine-issue.user.js
[svr-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/switch-visibility-of-redmine-sidebar.user.js

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

### Convert spreadsheet value to texttile table

A UserScript that converts tab-delimited tab-delimited data copied from a spreadsheet to texttile tab-style.  
You to click the right mouse button and run from the context menu.  

[![Image from Gyazo](https://i.gyazo.com/b328a436452fcf6d0416dc5e4face80b.gif)](https://gyazo.com/b328a436452fcf6d0416dc5e4face80b)  


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

### Copy Redmine code highlighting format  

UserScript to copy Redmine Textile code highlight format to clipboard.  
Using keyboard shortcuts that start with ʻalt + c`.

[![Image from Gyazo](https://i.gyazo.com/dd47bc1d2d6b7586289884dea548d5c2.gif)](https://gyazo.com/dd47bc1d2d6b7586289884dea548d5c2)    

* **Keyboard shortcuts**  

|Keyboard shortcuts|Description|
|:-----------------|:----------|
|Alt + c j|Copy Java code highlighting format|
|Alt + c J|Copy JavaScript code highlighting format|
|Alt + c s|Copy SQL code highlighting format|
|Alt + c h|Open this Help Url link|

* **References**
    * [Redmineのシンタックスハイライトの対応形式 | Redmine.JP Blog](http://blog.redmine.jp/articles/syntax-hilight/)    
    * [RedmineCodeHighlightingLanguages - Redmine](https://www.redmine.org/projects/redmine/wiki/RedmineCodeHighlightingLanguages)  

----

### Copy Redmine's issue template

UserScript to copy and paste Redmine issue template with keyboard shortcut.  
Using keyboard shortcuts that start with ʻalt + t`.

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

### Copy Redmine wiki macro  

UserScript to copy Redmine wiki  macro syntax with keyboard shortcut.  
Using keyboard shortcuts that start with ʻalt + w`.  

[![Image from Gyazo](https://i.gyazo.com/8b37c79ef0bd31f6c00107416645bee8.gif)](https://gyazo.com/8b37c79ef0bd31f6c00107416645bee8)

* **Keyboard shortcuts**  

|Keyboard shortcuts|Description|macro syntax|
|:-----------------|:----------|:-----------|
|Alt + w 1|Table of contents (left justified)|{{toc}}|
|Alt + w 2|Table of contents (right justified)|{{>toc}}|
|Alt + w 3|Show list of child pages|{{child_pages}}|
|Alt + w 4|Include and view Wiki pages|{{include(Foo)}}|
|Alt + w 5|Show thumbnail of image|{{thumbnail(Foo.png)}}|
|Alt + w 6|Collapse display|{{collapse(詳細を表示...)\nこの部分はデフォルトでは折り畳まれた状態で表示されます。\nリンクをクリックすると展開されます。\n}}|
|Alt + w q|Block quote text|bq.|
|Alt + w w|Display issue|{{issue(123, project=true, tracker=true, subject=false)}}|
|Alt + W h|Open this Help Url link|-|

* **References**  
    * [RedmineTextFormattingTextile - Redmine](https://www.redmine.org/projects/redmine/wiki/RedmineTextFormattingTextile)

----  

### Display Redmine'wiki for Print

UserScript to display Redmine wiki for printing.  
You to click the right mouse button and run from the context menu.  

[![Image from Gyazo](https://i.gyazo.com/015dfbc4be75fcc5803c993d0e54dc8a.gif)](https://gyazo.com/015dfbc4be75fcc5803c993d0e54dc8a)  

* **References**  
    * [RedmineのWikiページをそのまま印刷するためのブックマークレット | ハックノート](https://hacknote.jp/archives/10621/)


----

### Scroll Redmine issue

UserScript that supports scrolling to the description field and resizing of the input field, scrolling to the comment field, resizing of the input field.   
Using keyboard shortcuts that start with ʻalt + s`.

[![Image from Gyazo](https://i.gyazo.com/998bd70fab6855409ce09395e72feca8.gif)](https://gyazo.com/998bd70fab6855409ce09395e72feca8)

* **Keyboard shortcuts**  

|Keyboard shortcuts|Description|
|:-----------------|:----------|
|Alt + s c|Scroll to issue comment field and resize.|
|Alt + s d|Scroll to issue description field and resize.|
|Alt + s h|Open this Help Url link|

* **References**     
    * [Redmineでチケットの返信が便利になるブックマークレット作った | 長谷川智希 @tomzoh blog](https://www.hasegawa-tomoki.com/development/2015/02/25/redmine-bookmarklet-html/)

---

### Switch visibility of Redmine sidebar    

UserScript to switch sidebar of Redmine with keyboard shortcut.  
In addition, there is a function to save the previous display state in localstorage.  

[![Image from Gyazo](https://i.gyazo.com/35d520680e1b6d4d3c31a38c0b275cf7.gif)](https://gyazo.com/35d520680e1b6d4d3c31a38c0b275cf7)

* **Keyboard shortcuts**  

|Keyboard shortcuts|Description|
|:-----------------|:----------|
|Alt + →|Show Sidebar|
|Alt + ←|Hide Sidebar|

* **References**     
    * [Hide Sidebar - Plugins - Redmine](https://www.redmine.org/plugins/sidebar_hide)  
    Redmine has a plugin called `Hide Sidebar` that allows you to show or hide the sidebar. If you install the plugin, you don't need to use this user script.   

