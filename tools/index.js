const { Command } = require('commander'); // (normal include)
const fs = require('fs');
const path = require('path');
const userScirptsDirectry = '../userscripts';
const outputDirectry = './outputs';
const jsonObject = JSON.parse(fs.readFileSync('./conf/data.json', 'utf8'));

// １ファイルの内容を置換する
function replaceSyntax(filePath) {
    let text = fs.readFileSync(filePath, 'utf-8');
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
    let matchStrings = jsonObject[path.basename(filePath)];
    let elems = [];
    for (let elem of matchStrings) {
        elems.push("// @match" + "    " + elem);
    }
    result = result.replace('@@@match@@@', elems.join('\n'));
    return result;
}

// ファイル全ての内容を置換する
function replaceSyntaxAll(dir) {
    const filenames = fs.readdirSync(dir);
    filenames.forEach((filename) => {
        const fullPath = path.join(dir, filename);
        let result = replaceSyntax(fullPath);
        const writeFullPath = path.join(outputDirectry, filename);
        try {
            fs.writeFileSync(writeFullPath, result);
        } catch (e) {
            throw e;
        }
    });
}

// コマンドライン引数をcommanderでパースする
const program = new Command();
program.parse(process.argv);
// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];
if (typeof fullPath === "undefined") {
    replaceSyntaxAll(userScirptsDirectry);
} else {
    replaceSyntax(filePath);
}
