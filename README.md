# \<polymer-quill\>

# Polymer Quill Rich Text Editor

`polymer-quill` creates a Polymer Quill Rich Text Editor.

Quill is a free, open source WYSIWYG editor built for the modern web.
With its modular architecture and expressive API, it is completely customizable to fit any need.
Learn more at http://quilljs.com/

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

### Install

    bower install --save polymer-quill
