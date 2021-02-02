let arc = require('@architect/functions')

module.exports = function logout (state) {
  return `<!DOCTYPE html>
<html>
<head>
<link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
</head>
<body>
<form action=/logout method=POST><button>logout ${ state.account }</button></form>
<main></main>
<input type=text id=message autofocus placeholder="chat text here">
<script>window.WSURL = "${ process.env.WSURL || 'ws://localhost:3333' }"</script>
<script type=module src=${ arc.static('/index.js') }></script>
</body>
</html>`
}
