/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbar = [
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'SelectAll', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyRight', 'JustifyCenter', 'JustifyLeft', 'JustifyBlock' ] },
		{ name: 'links', items: [ 'BidiRtl', 'BidiLtr', 'Link', 'Unlink','Anchor'] },
		{ name: 'insert', items: [ 'Image', 'HorizontalRule',  'SpecialChar', 'PageBreak'] },
		{ name: 'styles', items: [  'Font', 'FontSize','TextColor', 'BGColor','Maximize' ] },
	];
	config.contentsLangDirection = 'rtl';
	config.language = 'fa';
	config.skin = 'moono-lisa';

	config.font_names = 'Arial;Times New Roman;Verdana';
};
