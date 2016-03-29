var express = require('express');

var app = express();

app.get('/api/hello', function (req, res) {
	res.send('hi there');
});

var server = app.listen(4000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('hello from express, at http://%s:%s', host, port);
})