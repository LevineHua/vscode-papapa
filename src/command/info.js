/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-07-28 16:53:28
 * @LastEditors: Levine
 * @LastEditTime: 2022-07-28 17:32:06
 * @FilePath: /papapa/src/command/info.js
 */
const vscode = require('vscode');
const { getLevel } = require('../utils/level')

module.exports = (context) => {
  return vscode.commands.registerCommand('papapa.info', function () {
    const { level, count, today } = getLevel(context)
  
    vscode.window.showInformationMessage(`腱鞘炎段位信息`, {
      detail: `腱鞘炎段位：${level}\n敲空格键总次数：${count}\n今日敲空格次数：${today}`,
      modal: true
    });
  })
};
