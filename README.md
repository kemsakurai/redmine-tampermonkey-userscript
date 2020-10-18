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
    | [Display Redmine'wiki for Print][drw-help] | [install][drw-raw] | 2020.10.18 | 2020.10.19|

[asr-help]: #Add-SearchBox-To-Redmine
[aer-help]: #Auto-execute-Redmine-Ganttchart-Grep-Bookmarklet
[cpl-help]: #Copy-Page-Link-for-Textile
[drw-help]: #Display-Redmine'wiki-for-Print

[asr-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/add-search-box-to-redmine.user.js
[aer-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/auto-execute-redmine-ganttchart-grep-bookmarklet.user.js
[cpl-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/copy-page-link-for-textile.user.js
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

### Display Redmine'wiki for Print

UserScript to display Redmine wiki for printing.  
You to click the right mouse button and run from the context menu.  

[![Image from Gyazo](https://i.gyazo.com/015dfbc4be75fcc5803c993d0e54dc8a.gif)](https://gyazo.com/015dfbc4be75fcc5803c993d0e54dc8a)  

* **References**  
    * [RedmineのWikiページをそのまま印刷するためのブックマークレット | ハックノート](https://hacknote.jp/archives/10621/)


### 

* **References**  
    * [amanoese/redmine-ganttchart-grep-bookmarklet: redmine ganttchart grep bookmarklet](https://github.com/amanoese/redmine-ganttchart-grep-bookmarklet)
    * [Redmineのガントチャート画面でツリー表示のまま検索する - Qiita](https://qiita.com/amanoese/items/edcc2226a6d52cc9598a)   
