/*
 * @Description: 腱鞘炎计数器，又名空格计数器
 * @Author: Levine
 * @Date: 2022-07-26 18:12:37
 * @LastEditors: Levine
 * @LastEditTime: 2022-07-28 17:12:01
 * @FilePath: /papapa/src/extension.js
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { Papapa } = require('./papapa.js');
const info = require('./command/info')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	new Papapa(context)

	console.log('Congratulations, your extension "papapa" is now active!');

	// 注册 papapa.info 命令
	context.subscriptions.push(info(context));
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
