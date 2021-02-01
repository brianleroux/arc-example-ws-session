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
please logout <form action=/logout method=POST><button>sign out</button></form>
<hr>
<pre>
${ JSON.stringify(state, null, 2) }
</pre>
<script>window.WSURL = "${ process.env.ARC_WSS_URL }"</script>
<script type=module src=${ arc.static('/index.js') }></script>
</body>
</html>`
}
