let arc = require('@architect/functions')
let data = require('@begin/data')

// clean up bad connections
exports.handler = async function disconnected (event) {
  try {
    let table = 'connections'
    let key = event.requestContext.connectionId
    await data.destroy({ table, key })
  }
  catch (e) {
    console.error('swallowing', e)
  }
  return { statusCode: 200 }
}
