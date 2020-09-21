import {
    CodeEditor
} from './code-editor';
import {
    openCodeStr
} from './consts';

export default (editor, opts) => {
    const cm = editor.Commands;
    let codeEditor = null;

    cm.add(openCodeStr, {
        run: (editor, senderBtn) => {
            !codeEditor && (codeEditor = new CodeEditor(editor, opts)) && codeEditor.buildCodePanel();
            codeEditor.showCodePanel();
        },
        stop: (editor, senderBtn) => {
            codeEditor && codeEditor.hideCodePanel();
        },
    });
}