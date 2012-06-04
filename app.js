var connect = require("connect");


connect()
  .use(connect.static(__dirname + '/public'))
  .use(connect.favicon(__dirname + '/public/images/favicon.ico')).listen(process.env.PORT);

