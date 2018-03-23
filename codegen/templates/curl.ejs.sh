<% var isSessionStart = serviceID === 'session' && actionID === 'start' -%>
<% var SESSION_VARS = isSessionStart ? [] : ['secret', 'userId', 'sessionType', 'partnerId', 'expiry'] -%>
<% if (showSetup && !isSessionStart) { -%>
KALTURA_SESSION=`curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "secret=<%- answers.secret %>" \
    -d "userId=<%- answers.userId %>" \
    -d "type=<%- answers.sessionType || 0 %>" \
    -d "partnerId=<%- answers.partnerId || 'YOUR_PARTNER_ID' %>" \
    -d "expiry=<%- answers.expiry || 86400 %>" \
    -d "format=1" | sed -e "s:\"::g"`
<% } -%>
<% var keys = Object.keys(answers).filter(function(k) {return SESSION_VARS.indexOf(k) === -1}) -%>
curl -X POST https://www.kaltura.com/api_v3/service/<%- serviceID %>/action/<%- actionID %> \
    -d "ks=$KALTURA_SESSION" \
<% for (var i = 0; i < keys.length; ++i) { -%>
    -d "<%- keys[i] %>=<%- encodeURIComponent(answers[keys[i]]) %>"<%- i === keys.length - 1 ? '' : ' \\' %>
<% } -%>
