# redmine-tampermonkey-scripts-tools    

It is a tool to convert @match description of Tampermonkey user script for your operating environment.  

-------

## Install  

* git clone and npm install
```console
git clone https://github.com/kemsakurai/redmine-tampermonkey-userscript.git
cd tools
npm install 
```
-------

## Configration  

Edit the contents of `conf/data.json` under the `tools` directory.
Edit the `@match` description in the user script with the array element string.  

* data.json  
```javascript
{
    "add-search-box-to-redmine.user.js":["https://my.redmine.jp/**/issues/*","https://my.redmine.jp/**/wiki/*"],
    "auto-execute-redmine-ganttchart-grep-bookmarklet.user.js":["https://my.redmine.jp/**/gantt*"],
    "convert-spreatsheetvalue-to-texttile-table.user.js":["https://my.redmine.jp/**/gantt*"],
    "copy-page-link-for-textile.user.js":[],
    "copy-redmine-code-highlighting-format.user.js":["https://my.redmine.jp/**"],
    "copy-redmine-issue-template.user.js":["https://my.redmine.jp/**/issues/**"],
    "copy-redmine-wiki-macro.user.js":["https://my.redmine.jp/**wiki**"],
    "display-redmine-wiki-for-print.user.js":[],
    "scroll-redmine-issue.user.js":["https://my.redmine.jp**issues/**"],
    "switch-visibility-of-redmine-sidebar.user.js":["https://my.redmine.jp/**/issues*","https://my.redmine.jp/**/wiki/*"]
}
```

----

## Run     

* Replace all files  
```console
node index.js all     
```

* Specify a file to replace    
```console
node index.js add-search-box-to-redmine.user.js  
```

## Output files       

The files are output under the `tools/outputs` directory.     

