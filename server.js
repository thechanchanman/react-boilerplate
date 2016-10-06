var express = require('express');

// create app
var app = express();
// which folder to serve
app.use(express.static('public'));

// start the server
app.listen(3000, function(){
	console.log('Express server is up on port 3000');
});
