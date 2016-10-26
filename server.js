//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Set up the Express APP

var app = express();
var PORT = 8080;

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Table Data

var friends = [];


//Routes

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/api/friends', function (req, res){
	res.json(friends);
});

app.post('/', function(req, res){
	var newFriend = req.body;

	console.log(newFriend);

	friends.push(newFriend);

	res.json(newFriend);
});

//Starts server to being listening
app.listen(PORT, function(){
	console.log('Server is up and running... WHAT WAHT?!?! ' + PORT);
});