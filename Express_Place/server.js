const PORT = 3000;

var express = require('express');
var app = express();
var server = app.listen(PORT, function(){
	console.log('express server has started on port '+PORT);
});

class count{}
count.num = 1;

app.get('/', function(req,res){
		console.log("Get '/'");
		res.send("count :  " + count.num++);
});

app.get('/a', function(req,res){
		console.log("Get '/a'");
		res.send("count : " + count.num++);
});