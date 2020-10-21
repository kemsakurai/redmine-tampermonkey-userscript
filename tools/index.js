const { Command } = require('commander'); // (normal include)
const fs = require('fs');
const path = require('path');
const userScirptsDirectry = '../userscripts';
const outputDirectry = './outputs';
const jsonObject = JSON.parse(fs.readFileSync('./conf/data.json', 'utf8'));

// １ファイルの内容を置換する
function replaceSyntax(dir, fileName) {
    console.log("replaceSyntax>>>", fileName);
    const fullPath = path.join(dir, fileName);
    let text = fs.readFileSync(fullPath, 'utf-8');
    // --------------
    // 複数行にわたる@match記述を、@@@match@@@に置換する
    // -------
    let result = text.replace(/.*@match.*/g, '@@@match@@@');
    let resuttArray = result.split('@@@match@@@')
    if (resuttArray.length  > 1) {
        result = resuttArray[0] + '@@@match@@@' + resuttArray[resuttArray.length - 1];
    } else {
        result = resuttArray[0];
    }
    let matchStrings = jsonObject[path.basename(fullPath)];
    let elems = [];
    for (let elem of matchStrings) {
        elems.push("// @match" + "    " + elem);
    }
    result = result.replace('@@@match@@@', elems.join('\n'));
    return result;
}
// 置換したファイルを書き出す
function writeMatchReplacedFile(fileName, result) {
    console.log("writeMatchReplacedFile>>>", fileName);
    const writeFullPath = path.join(outputDirectry, fileName);
    try {
        fs.writeFileSync(writeFullPath, result);
    } catch (e) {
        throw e;
    }
}

// ファイル全ての内容を置換する
function replaceSyntaxAll(dir) {
    const filenames = fs.readdirSync(dir);
    filenames.forEach((fileName) => {
        let result = replaceSyntax(dir, fileName);
        writeMatchReplacedFile(fileName, result);
    });
}

// コマンドライン引数をcommanderでパースする
const program = new Command();
program
  .version('0.1.0')
  .arguments('<fileName>')
  .action(function (fileName) {
    console.log("@match replace start...");
    if (fileName === "all") {
        replaceSyntaxAll(userScirptsDirectry);
    } else {
        let result = replaceSyntax(userScirptsDirectry, fileName);
        writeMatchReplacedFile(fileName, result);
    }
    console.log("@match replace end...");
  });
program.parse(process.argv);
