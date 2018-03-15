<% var SESSION_VARS = ['secret', 'userId', 'sessionType', 'partnerId', 'expiry'] -%>
<% if (showSetup) { -%>
KALTURA_SESSION=`curl -X POST https://www.kaltura.com/api_v3/service/session/action/start \
    -d "secret=<%- answers.secret %>" \
    -d "userId=<%- answers.userId %>" \
    -d "type=<%- answers.sessionType || 0 %>" \
    -d "partnerId=<%- answers.partnerId || 'YOUR_PARTNER_ID' %>" \
    -d "expiry=<%- answers.expiry || 86400 %>" \
    -d "format=3"`
KALTURA_SESSION=`echo $KALTURA_SESSION | sed -e "s/^.*\"\(.*\)\".*$/\1/"`
<% } -%>
<% if (!showSetup || serviceID !== 'session' || actionID !== 'start') { -%>
curl -X POST https://www.kaltura.com/api_v3/service/<%- serviceID %>/action/<%- actionID %> \
    -d "ks=$KALTURA_SESSION" \
<%   for (var key in answers) { -%>
<%     if (SESSION_VARS.indexOf(key) !== -1) continue; -%>
    -d "<%- key %>=<%- encodeURIComponent(answers[key]) %>" \
<%   } -%>
<% } -%>
