var express = require("express");
var app= new express();
var http = require("http").Server(app);
var io=require("socket.io")(http);


var port = Number(process.env.PORT || 8000);

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

app.get('/kayit.html',function(req,res){
	res.sendFile(__dirname+'/kayit.html');
});

app.get('/canli.html',function(req,res){
	res.sendFile(__dirname+'/canli.html');
});


io.on('connection',function(socket){
	socket.on('stream',function(image){
		socket.broadcast.emit('stream',image);
	});
});

http.listen(port);
