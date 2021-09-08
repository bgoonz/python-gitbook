"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    $schema: 'vscode://schemas/color-theme',
    name: 'Cobalt',
    type: 'dark',
    colors: {
        // activityBar
        'activityBar.background': '#122738',
        'activityBar.border': '#0d3a58',
        'activityBar.dropBackground': '#0d3a58',
        'activityBar.foreground': '#fff',
        'activityBarBadge.background': '#ffc600',
        'activityBarBadge.foreground': '#000',
        // badge
        'badge.background': '#ffc600',
        'badge.foreground': '#000',
        // button
        'button.background': '#0088ff',
        'button.foreground': '#fff',
        'button.hoverBackground': '#ff9d00',
        // contrast
        contrastActiveBorder: null,
        contrastBorder: '#ffffff00',
        // debug
        'debugExceptionWidget.background': '#193549',
        'debugExceptionWidget.border': '#aaa',
        'debugToolBar.background': '#193549',
        // description
        descriptionForeground: '#aaa',
        // diff
        'diffEditor.insertedTextBackground': '#3ad90033',
        'diffEditor.insertedTextBorder': '#3ad90055',
        'diffEditor.removedTextBackground': '#ee3a4333',
        'diffEditor.removedTextBorder': '#ee3a4355',
        // dropdown
        'dropdown.background': '#193549',
        'dropdown.border': '#15232d',
        'dropdown.foreground': '#fff',
        // editor
        // This is the main background color
        'editor.background': '#193549',
        // this is the main text colour
        'editor.foreground': '#fff',
        // Okay this part is confusing as heck!
        // Currently found item
        'editor.findMatchBackground': '#FF720066',
        // Other Found Items int the document
        'editor.findMatchHighlightBackground': '#CAD40F66',
        // WTF is this one for? I don't know
        'editor.findRangeHighlightBackground': '#243E51',
        // When you hover over something and a popup shows, this highlights that thing
        'editor.hoverHighlightBackground': '#ffc60033',
        // when you have something selected, but have lost focus on the editor
        'editor.inactiveSelectionBackground': '#003b8b',
        // current line styles
        'editor.lineHighlightBackground': '#1F4662',
        'editor.lineHighlightBorder': '#234E6D',
        'editor.rangeHighlightBackground': '#1F4662',
        // selected Text colours
        // This is the standard Select colour
        'editor.selectionBackground': '#0050A4',
        // This is the colour of the other matching elements
        'editor.selectionHighlightBackground': '#0050A480',
        // if you tab away you can colour it differently, but ill leave this one out
        // "editor.inactiveSelectionBackground": "",
        // Word Highlights! This happens when you move your cursor inside a variable
        // Strong is the one where your cursor currently is
        'editor.wordHighlightStrongBackground': '#ffffff21',
        // and this one is the rest of them
        'editor.wordHighlightBackground': '#ffffff21',
        'editorBracketMatch.background': '#0d3a58',
        'editorBracketMatch.border': '#ffc60080',
        'editorCodeLens.foreground': '#aaa',
        'editorCursor.foreground': '#ffc600',
        'editorError.border': '#0d3a58',
        'editorError.foreground': '#A22929',
        // gutter
        'editorGutter.background': '#12273866',
        'editorGutter.addedBackground': '#3C9F4A',
        'editorGutter.deletedBackground': '#A22929',
        'editorGutter.modifiedBackground': '#26506D',
        // editorGroup
        'editorGroup.background': '#A22929',
        'editorGroup.border': '#122738',
        'editorGroup.dropBackground': '#12273899',
        // editorGroupHeader
        'editorGroupHeader.noTabsBackground': '#193549',
        'editorGroupHeader.tabsBackground': '#193549',
        'editorGroupHeader.tabsBorder': '#15232d',
        // editorHoverWidget
        'editorHoverWidget.background': '#15232d',
        'editorHoverWidget.border': '#0d3a58',
        'editorIndentGuide.background': '#3B5364',
        'editorLineNumber.foreground': '#aaa',
        'editorLink.activeForeground': '#aaa',
        // editorMarkerNavigation
        'editorMarkerNavigation.background': '#3B536433',
        'editorMarkerNavigationError.background': '#A22929',
        'editorMarkerNavigationWarning.background': '#ffc600',
        // ruler
        'editorOverviewRuler.border': '#0d3a58',
        'editorOverviewRuler.commonContentForeground': '#ffc60055',
        'editorOverviewRuler.currentContentForeground': '#ee3a4355',
        'editorOverviewRuler.incomingContentForeground': '#3ad90055',
        'editorRuler.foreground': '#1F4662',
        // editorSuggestWidget
        'editorSuggestWidget.background': '#15232d',
        'editorSuggestWidget.border': '#15232d',
        'editorSuggestWidget.foreground': '#aaa',
        'editorSuggestWidget.highlightForeground': '#ffc600',
        'editorSuggestWidget.selectedBackground': '#193549',
        // editorWarning
        'editorWarning.border': '#ffffff00',
        'editorWarning.foreground': '#ffc600',
        'editorWhitespace.foreground': '#ffffff1a',
        'editorWidget.background': '#15232d',
        'editorWidget.border': '#0d3a58',
        errorForeground: '#A22929',
        // extensionButton
        'extensionButton.prominentBackground': '#0088ff',
        'extensionButton.prominentForeground': '#fff',
        'extensionButton.prominentHoverBackground': '#ff9d00',
        focusBorder: '#0d3a58',
        foreground: '#aaa',
        // input
        'input.background': '#193549',
        'input.border': '#0d3a58',
        'input.foreground': '#ffc600',
        'input.placeholderForeground': '#aaa',
        'inputOption.activeBorder': '#8dffff',
        'inputValidation.errorBackground': '#193549',
        'inputValidation.errorBorder': '#ffc600',
        'inputValidation.infoBackground': '#193549',
        'inputValidation.infoBorder': '#0D3A58',
        'inputValidation.warningBackground': '#193549',
        'inputValidation.warningBorder': '#ffc600',
        // list
        'list.activeSelectionBackground': '#193549',
        'list.activeSelectionForeground': '#aaa',
        'list.dropBackground': '#0d3a58',
        'list.focusBackground': '#0d3a58',
        'list.focusForeground': '#aaa',
        'list.highlightForeground': '#ffc600',
        'list.hoverBackground': '#193549',
        'list.hoverForeground': '#aaa',
        'list.inactiveSelectionBackground': '#0d3a58',
        'list.inactiveSelectionForeground': '#aaa',
        // menu
        'menu.background': '#122738',
        // merge
        'merge.border': '#ffffff00',
        'merge.commonContentBackground': '#c97d0c',
        'merge.commonHeaderBackground': '#c97d0c',
        'merge.currentContentBackground': '#2F7366',
        'merge.currentHeaderBackground': '#2F7366',
        'merge.incomingContentBackground': '#185294',
        'merge.incomingHeaderBackground': '#185294',
        // notification colors - The colors below only apply for VS Code versions 1.21 and higher.
        'notificationCenter.border': '#ffc600',
        'notificationCenterHeader.foreground': '#aaa',
        'notificationCenterHeader.background': '#122738',
        'notificationToast.border': '#ffc600',
        'notifications.foreground': '#aaa',
        'notifications.background': '#122738',
        'notifications.border': '#ffc600',
        'notificationLink.foreground': '#ffc600',
        // notification - If you target VS Code versions before the 1.21 (February 2018) release, these are the old (no longer supported) colors:
        'notification.background': '#ffc600',
        'notification.buttonBackground': '#0088ff',
        'notification.buttonForeground': '#fff',
        'notification.buttonHoverBackground': '#ff9d00',
        'notification.errorBackground': '#A22929',
        'notification.errorForeground': '#fff',
        'notification.foreground': '#000',
        'notification.infoBackground': '#0088ff',
        'notification.infoForeground': '#fff',
        'notification.warningBackground': '#ff9d00',
        'notification.warningForeground': '#000',
        // panel
        'panel.background': '#122738',
        'panel.border': '#ffc600',
        'panelTitle.activeBorder': '#ffc600',
        'panelTitle.activeForeground': '#ffc600',
        'panelTitle.inactiveForeground': '#aaa',
        // "peekView
        'peekView.border': '#ffc600',
        'peekViewEditor.background': '#193549',
        'peekViewEditor.matchHighlightBackground': '#19354900',
        'peekViewEditorGutter.background': '#122738',
        'peekViewResult.background': '#15232d',
        'peekViewResult.fileForeground': '#aaa',
        'peekViewResult.lineForeground': '#fff',
        'peekViewResult.matchHighlightBackground': '#0d3a58',
        'peekViewResult.selectionBackground': '#0d3a58',
        'peekViewResult.selectionForeground': '#fff',
        'peekViewTitle.background': '#15232d',
        'peekViewTitleDescription.foreground': '#aaa',
        'peekViewTitleLabel.foreground': '#ffc600',
        // picker
        'pickerGroup.border': '#0d3a58',
        'pickerGroup.foreground': '#aaa',
        // progressBar
        'progressBar.background': '#ffc600',
        // scrollbar
        'scrollbar.shadow': '#00000000',
        'scrollbarSlider.activeBackground': '#355166cc',
        'scrollbarSlider.background': '#1F466280',
        'scrollbarSlider.hoverBackground': '#406179cc',
        // selection
        'selection.background': '#027dff',
        // sidebar
        'sideBar.background': '#15232d',
        'sideBar.border': '#0d3a58',
        'sideBar.foreground': '#aaa',
        'sideBarSectionHeader.background': '#193549',
        'sideBarSectionHeader.foreground': '#aaaaaa',
        'sideBarTitle.foreground': '#aaaaaa',
        // statusBar
        'statusBar.background': '#15232d',
        'statusBar.border': '#0d3a58',
        'statusBar.debuggingBackground': '#15232d',
        'statusBar.debuggingBorder': '#ffc600',
        'statusBar.debuggingForeground': '#ffc600',
        'statusBar.foreground': '#aaa',
        'statusBar.noFolderBackground': '#15232d',
        'statusBar.noFolderBorder': '#0d3a58',
        'statusBar.noFolderForeground': '#aaa',
        'statusBarItem.activeBackground': '#0088ff',
        'statusBarItem.hoverBackground': '#0d3a58',
        'statusBarItem.prominentBackground': '#15232d',
        'statusBarItem.prominentHoverBackground': '#0d3a58',
        // tab
        'tab.activeBackground': '#122738',
        'tab.activeForeground': '#fff',
        'tab.border': '#15232D',
        'tab.activeBorder': '#ffc600',
        'tab.inactiveBackground': '#193549',
        'tab.inactiveForeground': '#aaa',
        'tab.unfocusedActiveForeground': '#aaa',
        'tab.unfocusedInactiveForeground': '#aaa',
        // --- workbench: terminal
        'terminal.ansiBlack': '#000000',
        'terminal.ansiRed': '#ff628c',
        'terminal.ansiGreen': '#3ad900',
        'terminal.ansiYellow': '#ffc600',
        'terminal.ansiBlue': '#0088ff',
        'terminal.ansiMagenta': '#fb94ff',
        'terminal.ansiCyan': '#80fcff',
        'terminal.ansiWhite': '#ffffff',
        'terminal.ansiBrightBlack': '#0050A4',
        'terminal.ansiBrightRed': '#ff628c',
        'terminal.ansiBrightGreen': '#3ad900',
        'terminal.ansiBrightYellow': '#ffc600',
        'terminal.ansiBrightBlue': '#0088ff',
        'terminal.ansiBrightMagenta': '#fb94ff',
        'terminal.ansiBrightCyan': '#80fcff',
        'terminal.ansiBrightWhite': '#193549',
        'terminal.background': '#122738',
        'terminal.foreground': '#ffffff',
        'terminalCursor.background': '#ffc600',
        'terminalCursor.foreground': '#ffc600',
        // Git status colors in File Explorer
        'gitDecoration.modifiedResourceForeground': '#ffc600',
        'gitDecoration.deletedResourceForeground': '#ff628c',
        'gitDecoration.untrackedResourceForeground': '#3ad900',
        'gitDecoration.ignoredResourceForeground': '#808080',
        'gitDecoration.conflictingResourceForeground': '#FF7200',
        // textBlockQuote
        'textBlockQuote.background': '#193549',
        'textBlockQuote.border': '#0088ff',
        'textCodeBlock.background': '#193549',
        'textLink.activeForeground': '#0088ff',
        'textLink.foreground': '#0088ff',
        'textPreformat.foreground': '#ffc600',
        'textSeparator.foreground': '#0d3a58',
        'titleBar.activeBackground': '#15232D',
        'titleBar.activeForeground': '#ffffff',
        'titleBar.inactiveBackground': '#193549',
        'titleBar.inactiveForeground': '#ffffff33',
        'walkThrough.embeddedEditorBackground': '#0d3a58',
        'welcomePage.buttonBackground': '#193549',
        'welcomePage.buttonHoverBackground': '#0d3a58',
        'widget.shadow': '#00000026',
    },
    tokenColors: [{
            name: 'Comment',
            scope: ['comment', 'punctuation.definition.comment'],
            settings: {
                fontStyle: 'italic',
                foreground: '#0088ff',
            },
        },
        {
            name: 'Constant',
            scope: 'constant',
            settings: {
                foreground: '#ff628c',
            },
        },
        {
            name: 'Entity',
            scope: 'entity',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: 'Invalid',
            scope: 'invalid',
            settings: {
                foreground: '#f44542',
            },
        },
        {
            name: 'Storage Type Function',
            scope: 'storage.type.function',
            settings: {
                foreground: '#ff9d00',
            },
        },
        {
            name: 'Keyword',
            scope: 'keyword, storage.type.class',
            settings: {
                foreground: '#ff9d00',
            },
        },
        {
            name: 'Meta',
            scope: 'meta',
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: 'Meta JSX',
            scope: [
                'meta.jsx.children',
                'meta.jsx.children.js',
                'meta.jsx.children.tsx',
            ],
            settings: {
                foreground: '#fff',
            },
        },
        {
            name: 'Meta Brace',
            scope: 'meta.brace',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: 'Punctuation',
            scope: 'punctuation',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: 'Punctuation Parameters',
            scope: 'punctuation.definition.parameters',
            settings: {
                foreground: '#ffee80',
            },
        },
        {
            name: 'Punctuation Template Expression',
            scope: 'punctuation.definition.template-expression',
            settings: {
                foreground: '#ffee80',
            },
        },
        {
            name: 'Storage',
            scope: 'storage',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: 'Storage Type Arrow Function',
            scope: 'storage.type.function.arrow',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: 'String',
            scope: ['string', 'punctuation.definition.string'],
            settings: {
                foreground: '#a5ff90',
            },
        },
        {
            name: 'String Template',
            scope: ['string.template', 'punctuation.definition.string.template'],
            settings: {
                foreground: '#3ad900',
            },
        },
        {
            name: 'Support',
            scope: 'support',
            settings: {
                foreground: '#80ffbb',
            },
        },
        {
            name: 'Support Function',
            scope: 'support.function',
            settings: {
                foreground: '#ff9d00',
            },
        },
        {
            name: 'Support Variable Property DOM',
            scope: 'support.variable.property.dom',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: 'Variable',
            scope: 'variable',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: '[CSS] - Entity',
            scope: ['source.css entity', 'source.stylus entity'],
            settings: {
                foreground: '#3ad900',
            },
        },
        {
            name: '[CSS] - ID Selector',
            scope: 'entity.other.attribute-name.id.css',
            settings: {
                foreground: '#FFB454',
            },
        },
        {
            name: '[CSS] - Element Selector',
            scope: 'entity.name.tag',
            settings: {
                foreground: '#9EFFFF',
            },
        },
        {
            name: '[CSS] - Support',
            scope: ['source.css support', 'source.stylus support'],
            settings: {
                foreground: '#a5ff90',
            },
        },
        {
            name: '[CSS] - Constant',
            scope: [
                'source.css constant',
                'source.css support.constant',
                'source.stylus constant',
                'source.stylus support.constant',
            ],
            settings: {
                foreground: '#ffee80',
            },
        },
        {
            name: '[CSS] - String',
            scope: [
                'source.css string',
                'source.css punctuation.definition.string',
                'source.stylus string',
                'source.stylus punctuation.definition.string',
            ],
            settings: {
                foreground: '#ffee80',
            },
        },
        {
            name: '[CSS] - Variable',
            scope: ['source.css variable', 'source.stylus variable'],
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[HTML] - Entity Name',
            scope: 'text.html.basic entity.name',
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[HTML] - ID value',
            scope: 'meta.toc-list.id.html',
            settings: {
                foreground: '#A5FF90',
            },
        },
        {
            name: '[HTML] - Entity Other',
            scope: 'text.html.basic entity.other',
            settings: {
                fontStyle: 'italic',
                foreground: '#ffc600',
            },
        },
        {
            name: '[HTML] - Script Tag',
            scope: 'meta.tag.metadata.script.html entity.name.tag.html',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[HTML] - Quotes. these are a slightly different colour because expand selection will then not include quotes',
            scope: 'punctuation.definition.string.begin, punctuation.definition.string.end',
            settings: {
                foreground: '#92fc79',
            },
        },
        {
            name: '[INI] - Entity',
            scope: 'source.ini entity',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: '[INI] - Keyword',
            scope: 'source.ini keyword',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[INI] - Punctuation Definition',
            scope: 'source.ini punctuation.definition',
            settings: {
                foreground: '#ffee80',
            },
        },
        {
            name: '[INI] - Punctuation Separator',
            scope: 'source.ini punctuation.separator',
            settings: {
                foreground: '#ff9d00',
            },
        },
        {
            name: '[JAVASCRIPT] - Storage Type Function',
            scope: 'source.js storage.type.function',
            settings: {
                foreground: '#fb94ff',
            },
        },
        {
            name: '[JAVASCRIPT] - Variable Language',
            scope: 'variable.language, entity.name.type.class.js',
            settings: {
                foreground: '#fb94ff',
            },
        },
        {
            name: '[JAVASCRIPT] - Inherited Component',
            scope: 'entity.other.inherited-class.js',
            settings: {
                foreground: '#ccc',
            },
        },
        {
            name: '[PYTHON] - Self Argument',
            scope: 'variable.parameter.function.language.special.self.python',
            settings: {
                foreground: '#fb94ff',
            },
        },
        {
            name: '[JSON] - Support',
            scope: 'source.json support',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[JSON] - String',
            scope: [
                'source.json string',
                'source.json punctuation.definition.string',
            ],
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: '[MARKDOWN] - Heading Punctuation',
            scope: 'punctuation.definition.heading.markdown',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: '[MARKDOWN] - Heading Name Section',
            scope: [
                'entity.name.section.markdown',
                'markup.heading.setext.1.markdown',
                'markup.heading.setext.2.markdown',
            ],
            settings: {
                foreground: '#ffc600',
                fontStyle: 'bold',
            },
        },
        {
            name: '[MARKDOWN] - Paragraph',
            scope: 'meta.paragraph.markdown',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: '[MARKDOWN] - Quote Punctuation',
            scope: 'beginning.punctuation.definition.quote.markdown',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[MARKDOWN] - Quote Paragraph',
            scope: 'markup.quote.markdown meta.paragraph.markdown',
            settings: {
                fontStyle: 'italic',
                foreground: '#9effff',
            },
        },
        {
            name: '[MARKDOWN] - Separator',
            scope: 'meta.separator.markdown',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[MARKDOWN] - Emphasis Bold',
            scope: 'markup.bold.markdown',
            settings: {
                fontStyle: 'bold',
                foreground: '#9effff',
            },
        },
        {
            name: '[MARKDOWN] - Emphasis Italic',
            scope: 'markup.italic.markdown',
            settings: {
                fontStyle: 'italic',
                foreground: '#9effff',
            },
        },
        {
            name: '[MARKDOWN] - Lists',
            scope: 'beginning.punctuation.definition.list.markdown',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[MARKDOWN] - Link Title',
            scope: 'string.other.link.title.markdown',
            settings: {
                foreground: '#a5ff90',
            },
        },
        {
            name: '[MARKDOWN] - Link/Image Title',
            scope: [
                'string.other.link.title.markdown',
                'string.other.link.description.markdown',
                'string.other.link.description.title.markdown',
            ],
            settings: {
                foreground: '#a5ff90',
            },
        },
        {
            name: '[MARKDOWN] - Link Address',
            scope: [
                'markup.underline.link.markdown',
                'markup.underline.link.image.markdown',
            ],
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[MARKDOWN] - Inline Code',
            scope: ['fenced_code.block.language', 'markup.inline.raw.markdown'],
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[MARKDOWN] - Code Block',
            scope: ['fenced_code.block.language', 'markup.inline.raw.markdown'],
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[PUG] - Entity Name',
            scope: 'text.jade entity.name',
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[PUG] - Entity Attribute Name',
            scope: 'text.jade entity.other.attribute-name.tag',
            settings: {
                fontStyle: 'italic',
            },
        },
        {
            name: '[PUG] - String Interpolated',
            scope: 'text.jade string.interpolated',
            settings: {
                foreground: '#ffee80',
            },
        },
        {
            name: '[TYPESCRIPT] - Entity Name Type',
            scope: 'source.ts entity.name.type',
            settings: {
                foreground: '#80ffbb',
            },
        },
        {
            name: '[TYPESCRIPT] - Keyword',
            scope: 'source.ts keyword',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[TYPESCRIPT] - Punctuation Parameters',
            scope: 'source.ts punctuation.definition.parameters',
            settings: {
                foreground: '#e1efff',
            },
        },
        {
            name: '[TYPESCRIPT] - Punctuation Arrow Parameters',
            scope: 'meta.arrow.ts punctuation.definition.parameters',
            settings: {
                foreground: '#ffee80',
            },
        },
        {
            name: '[TYPESCRIPT] - Storage',
            scope: 'source.ts storage',
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[TYPESCRIPT] - Variable Language',
            scope: 'variable.language, entity.name.type.class.ts, entity.name.type.class.tsx',
            settings: {
                foreground: '#fb94ff',
            },
        },
        {
            name: '[TYPESCRIPT] - Inherited Component',
            scope: 'entity.other.inherited-class.ts, entity.other.inherited-class.tsx',
            settings: {
                foreground: '#ccc',
            },
        },
        {
            name: '[PHP] - Entity',
            scope: 'source.php entity',
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[PHP] - Variables',
            scope: 'variable.other.php',
            settings: {
                foreground: '#ffc600',
            },
        },
        {
            name: '[C#] - Annotations',
            scope: 'storage.type.cs',
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[C#] - Properties',
            scope: 'entity.name.variable.property.cs',
            settings: {
                foreground: '#9effff',
            },
        },
        {
            name: '[C#] - Storage modifiers',
            scope: 'storage.modifier.cs',
            settings: {
                foreground: '#80ffbb',
            },
        },
        {
            name: 'Italicsify for Operator Mono',
            scope: [
                'modifier',
                'this',
                'comment',
                'storage.modifier.js',
                'storage.modifier.ts',
                'storage.modifier.tsx',
                'entity.other.attribute-name.js',
                'entity.other.attribute-name.ts',
                'entity.other.attribute-name.tsx',
                'entity.other.attribute-name.html',
            ],
            settings: {
                fontStyle: 'italic',
            },
        },
        {
            name: '[CSHARP] - Modifiers and keyword types',
            scope: 'storage.modifier.cs, keyword.type.cs',
            settings: {
                foreground: '#fb94ff',
            },
        },
        {
            name: '[CSHARP] - Storage types',
            scope: 'storage.type.cs',
            settings: {
                foreground: '#80ffbb',
            },
        },
        {
            name: '[CSHARP] - Namespaces, parameters, field variables, properties',
            scope: 'entity.name.type.namespace.cs, entity.name.variable.parameter.cs, entity.name.variable.field.cs, entity.name.variable.property.cs',
            settings: {
                foreground: '#e1efff',
            },
        },
    ],
};