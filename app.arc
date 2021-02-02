@app
sesh

@aws
profile smallwins
region us-east-1

@cdn
false # disable cdn

@macros
arc-macro-dns
add-session-domain

@static
folder public
fingerprint true

@ws
# no further config 

@http
post /login
any /logout
any /*

@dns
static
  staging static-qa.arc-session.com
  production static.arc-session.com
http
  staging qa.arc-session.com
  production arc-session.com
ws
  staging ws-qa.arc-session.com
  production ws.arc-session.com

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
