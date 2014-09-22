var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));

app.get('/', require('./main'));

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
