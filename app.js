var connect = require("connect");


connect()
  .use(connect.static(__dirname + '/public'))
  .use(connect.favicon()).listen(process.env.PORT);

