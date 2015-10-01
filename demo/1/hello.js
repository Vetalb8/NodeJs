var http = require("http");

function foo(request, response) {
    response.writeHead(200);
    response.write("Hello, world!");
    setTimeout(function () {
        response.write("Hello is done!");
        response.end();
    }, 5000);
    //response.end();
}

var app = http.createServer(foo);
app.listen(8080);
console.log('Listening on 8080...');