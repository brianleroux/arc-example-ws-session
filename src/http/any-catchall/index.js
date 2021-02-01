let arc = require('@architect/functions')
let login = require('./login')
let logout = require('./logout')

exports.handler = arc.http.async(handler)

async function handler (req) {
  if (req.requestContext.http.method === 'POST') {
    // handle login
    return { 
      session: { account: req.body.name }, location: '/'
    }
  }
  else if (req.requestContext.http.path === '/logout') {
    // handle logout
    return {
      session: {}, location: '/'
    }
  }
  else {
    // display ui for everything else
    return {
      statusCode: 200,
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8'
      },
      body: req.session.account? logout(req.session) : login()
    }
  }
}
