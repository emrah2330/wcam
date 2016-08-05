var express = require("express");
var app= new express();
var http = require("http").Server(app);
var io=require("socket.io")(http);
var Log = require('log'),
	log = new Log('debug')

var port = Number(process.env.PORT || 5000);

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});


io.on('connection',function(socket){
	socket.on('stream',function(image){
		socket.broadcast.emit('stream',image);
	});
});

http.listen(port,function(){
	log.info('Şuanda server a bağlısınız %s',port);
	
});
