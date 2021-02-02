let arc = require('@architect/functions')

exports.handler = arc.http.async(login)

async function login (req) {
  return { 
    session: { 
      account: req.body.name 
    }, 
    location: '/'
  }
}
