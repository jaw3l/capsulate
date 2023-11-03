import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('capsulate.capsulateInBackticks', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			let document = editor.document;
			let selection = editor.selection;
			
			if (!selection.isEmpty) {
				let selectedText = document.getText(selection);
				let newText = `\`${selectedText}\``;
				editor.edit(editBuilder => {
					editBuilder.replace(selection, newText);
				});
			}
		}
	});
	
	context.subscriptions.push(disposable);
}

export function deactivate() {}