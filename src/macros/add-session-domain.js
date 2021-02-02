// TODO add to the domains macro
module.exports = async function addDomain(arc, cfn, stage='staging') {
  for (let r of Object.keys(cfn.Resources)) {
    let resource = cfn.Resources[r]
    if (resource.Type === 'AWS::Serverless::Function') {
      let staging = 'wss://ws-qa.arc-session.com'
      let production = 'wss://ws.arc-session.com'
      resource.Properties.Environment.Variables.WSURL = stage === 'staging'? staging : production
      resource.Properties.Environment.Variables.SESSION_DOMAIN = 'arc-session.com'
    }
  }
  return cfn
}
