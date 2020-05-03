/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global console, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import bindTwoStepCaretToAttribute from '../../src/utils/bindtwostepcarettoattribute';

ClassicEditor
	.create( document.querySelector( '#editor-ltr' ), {
		plugins: [ Essentials, Paragraph, Underline, Bold, Italic ],
		toolbar: [ 'undo', 'redo', '|', 'bold', 'underline', 'italic' ]
	} )
	.then( editor => {
		const bold = editor.plugins.get( Italic );
		const underline = editor.plugins.get( Underline );

		bindTwoStepCaretToAttribute( {
			view: editor.editing.view,
			model: editor.model,
			emitter: bold,
			attribute: 'italic',
			locale: editor.locale
		} );
		bindTwoStepCaretToAttribute( {
			view: editor.editing.view,
			model: editor.model,
			emitter: underline,
			attribute: 'underline',
			locale: editor.locale
		} );
	} )
	.catch( err => {
		console.error( err.stack );
	} );

ClassicEditor
	.create( document.querySelector( '#editor-rtl' ), {
		language: {
			content: 'he'
		},
		plugins: [ Essentials, Paragraph, Underline, Bold, Italic ],
		toolbar: [ 'undo', 'redo', '|', 'bold', 'underline', 'italic' ]
	} )
	.then( editor => {
		const bold = editor.plugins.get( Italic );
		const underline = editor.plugins.get( Underline );

		bindTwoStepCaretToAttribute( {
			view: editor.editing.view,
			model: editor.model,
			emitter: bold,
			attribute: 'italic',
			locale: editor.locale
		} );
		bindTwoStepCaretToAttribute( {
			view: editor.editing.view,
			model: editor.model,
			emitter: underline,
			attribute: 'underline',
			locale: editor.locale
		} );
	} )
	.catch( err => {
		console.error( err.stack );
	} );
