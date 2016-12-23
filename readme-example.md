### Example:
webcomponents.org inline demo. Not working because of needing to use shady

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script>
      window.Polymer = {
        dom: 'shady',
        lazyRegister: true
      };
    </script>
    <link rel="import" href="polymer-quill.html">
    <link rel="import" href="polymer-quill-bubble.html">
    <link rel="import" href="polymer-quill-html-render.html">
    <style is="custom-style">
      #container {
        display: flex;
      }
    </style>
    <div id="container">
      <next-code-block></next-code-block>
    </div>
    <script>
      // Setup Polymer options
      window.Polymer = {
        dom: 'shady'
      };
    </script>
  </template>
</custom-element-demo>
```
-->