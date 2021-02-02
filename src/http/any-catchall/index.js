let arc = require('@architect/functions')
let loggedOut = require('./login')
let loggedIn = require('./logout')

exports.handler = arc.http.async(handler)

async function handler (req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: req.session.account? loggedIn(req.session) : loggedOut()
  }
}
