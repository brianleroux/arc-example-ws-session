let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function connected(event) {

  console.log('got event', event)

  let table = 'connections'
  let key = event.requestContext.connectionId
  let sender = await data.get({ table, key })
  let payload = JSON.parse(event.body) 

  // send to all connections
  let pages = data.page({table:'connections', limit:25})
  for await (let page of pages) {
    for (let conn of page) {
      await arc.ws.send({ 
        id: conn.key, 
        payload: {account: sender.account, text: payload.text}
      }) 
    }
  } 

  return { statusCode: 200 }
}
