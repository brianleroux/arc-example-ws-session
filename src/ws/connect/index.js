let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(handler)

// add to the connections table
async function handler (req) {

  // blow up on bad session
  if (!req.session.account)
    throw Error('invalid session')

  // save the connection if its a good session
  await data.set({ 
    table: 'connections', 
    key: req.requestContext.connectionId,
    account: req.session.account
  })

  return {statusCode: 200}
}
