var constants = require('./constants');

var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(request, response) {
    response.send('hello world');
});

app.listen(constants.DEFAULT_PORT);

