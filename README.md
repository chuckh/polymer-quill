# \<polymer-quill\> [![Build Status](https://travis-ci.org/chuckh/polymer-quill.svg?branch=master)](https://travis-ci.org/chuckh/polymer-quill)

## Polymer Quill Rich Text Editor

`polymer-quill` element creates a Polymer Quill Rich Text Editor.

Quill is a free, open source WYSIWYG editor built for the modern web.
With its modular architecture and expressive API, it is completely customizable to fit any need.
Learn more at http://quilljs.com/

## Demo and API docs

[Demo and API docs](https://chuckh.github.io/polymer-quill/)

### Examples

#### Defaults (stores as Deltas every 2 seconds, does not show results, 100px height)

    <polymer-quill content="Hello World"></polymer-quill>

#### Custom (stores as HTML every 5 seconds, show results)

    <polymer-quill content="Hello World" store-as="html" store-interval="5000" show-results></polymer-quill>

#### Demo example

```html
<style is="custom-style">
  polymer-quill.full {
    --polymer-quill-editor-height: 150px;
  }
</style>
<h2>Full Toolbar, Show Results, Custom height (150px), Save as Deltas</h2>
<polymer-quill content="Hello World! - Store as Delta" class="full" store-as="delta"
  toolbar-type="full" show-results save-interval="1000">
</polymer-quill>
<h2>Standard Toolbar, Hide Results, Default height (100px), Save as HTML</h2>
<polymer-quill content="Hello World! - Store as HTML" store-as="html"></polymer-quill>
```

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--polymer-quill-editor-height`     | Custom height for editor     | `100px`
`--polymer-quill`                   | Mixin applied to the editor  | `{}`

## Install

    bower install --save polymer-quill

## License

### The MIT License (MIT)
Copyright (c) 2016 Chuck Horton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

![open source initiative](https://github.com/chuckh/polymer-quill/raw/master/images/open-source-initiative.png)
