let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function connected(event) {

  console.log('got event', event)

  let table = 'connections'
  let key = event.requestContext.connectionId
  let sender = await data.get({ table, key })
  let message = JSON.parse(event.body) 

  // send to all connections 25 at a time
  let pages = data.page({ table, limit: 25 })
  for await (let page of pages) {
    await Promise.all(page.map(connection=> arc.ws.send({ 
      id: connection.key, 
      payload: {
        account: sender.account, 
        text: message.text
      }
    })))
  } 

  return { statusCode: 200 }
}
