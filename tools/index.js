const { Command } = require('commander'); // (normal include)
const fs = require('fs');
const path = require('path');
const userScirptsDirectry = '../userscripts';

// １ファイルの内容を置換する
function replaceSyntax(filePath) {
    console.log(filePath);
    fs.readFile(filePath, "utf-8", (err, data) => {
        var result = data.replace(/.*@match.*/g, '@@@match@@@');
        while(result.split('@@@match@@@').length > 1) {
            result = result.replace(/.*@@@match@@@\n@@@match@@@\n*/g, '@@@match@@\n');
        }
    });
    console.log(result);
}

// ファイル全ての内容を置換する
function replaceSyntaxAll(dir) {
    const filenames = fs.readdirSync(
        dir);
    filenames.forEach((filename) => {
      const fullPath = path.join(dir, filename);
      replaceSyntax(fullPath);
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
