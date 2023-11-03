import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('capsulateInBackticks command test', async () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			await editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'test');
			});
			await vscode.commands.executeCommand('capsulate.capsulateInBackticks');
			assert.strictEqual(document.getText(), '`test`');
		}
	});
});