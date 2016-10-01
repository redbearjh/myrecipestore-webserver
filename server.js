var express = require('express');
var path = require('path');
var http = require('http');
var async = require('async');
var socketio = require("socket.io");


var htmlapp = express();
htmlapp.use(express.static('public/app'));
htmlapp.engine('html', require('ejs').renderFile);
htmlapp.set('view engine', 'html');
var htmlserver = http.createServer(htmlapp);
var io = socketio.listen(htmlserver);
htmlapp.use(express.static(path.resolve(__dirname,'/public/app')));

htmlserver.listen( process.env.PORT || 3100, process.env.IP || "0.0.0.0");
