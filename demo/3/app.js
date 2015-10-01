var express = require("express");
var request = require("request");
var url = require("url");

var app = express();
app.listen(8080);

app.set('views', __dirname);
app.set('views engine', 'ejs');

var names = {
    "john": "admin",
    "mike": "manager",
    "ivan": "user"
};

app.get('/', function (req, res) {
    res.sendfile(__dirname + "/test.html");
});

app.get('/user/:name', function (req, res) {
    var name = req.params.name;
    var options = {
        protocol: 'http',
        host: 'localhost:8081',
        pathname: '/',
        query: {user: name}
    };
    var needUrl = url.format(options);
    //var needUrl = 'http://localhost:8081/?name='+name;
    request(needUrl, function(err, response, body){
        console.log(body);
        var arr = JSON.parse(body);
        res.render("user.ejs",{name: arr[0].name, age: arr[0].age});
    });
});

/*
 app.get('/user/:name', function (req, res) {
 var role;
 var name = req.params.name.toLowerCase();
 if(name in names){
 role = names[req.params.name];
 }else{
 role = 'Unknown';
 }
 res.render('user.ejs',
 {
 name: req.params.name,
 role: role
 });
 res.end();
 });
 */