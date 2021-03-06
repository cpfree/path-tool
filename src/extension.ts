// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

var ncp = require("copy-paste");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "copy-path" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('copypath.helloWorld', (selected) => {

		// The code you place here will be executed every time your command is executed
		let path = vscode.workspace.asRelativePath(selected.path);
		path = path.replace(/\\/g, '/');
		ncp.copy(path);
	});

	context.subscriptions.push(disposable);
}
