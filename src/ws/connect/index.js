let arc = require('@architect/functions')

exports.handler = arc.http.async(handler)

async function handler (req) {
  console.log(JSON.stringify(req, null, 2))
  return {statusCode: 200}
}
