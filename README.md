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
	| [Add SearchBox To Redmine][asr-help]   | [install][asr-raw]] | 2020.10.18 | 2020.10.19|

[asr-help]: #Add-SearchBox-To-Redmine
[asr-raw]: https://github.com/kemsakurai/redmine-tampermonkey-userscript/raw/main/userscripts/add-search-box-to-redmine.user.js

----

## Updating  

Userscripts are set up to automatically update. You can check for updates from within the Tampermonkey menu, or click on the install link again to get the update.  

----

## Help  

----

### Add SearchBox To Redmine  

A user script that adds a search box at the bottom of the pull-down that increases the number of selection items in Redmine.  

* Target field (id specified)  
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

* Setting  
    Please modify the description of @match in the user script for your Redmine.  
    ```javascript
    // @match        https://my.redmine.jp/**/issues/*
    // @match        https://my.redmine.jp/**/wiki/*
    ```

* Reference  
    * [プルダウンリストの項目を検索選択するためのBookmarklet - どこかのだれかへ](https://tepp.hatenablog.jp/entry/2017/04/05/215756)  

