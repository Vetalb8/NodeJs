var events = require("events");
var eventEmitter = events.EventEmitter;

var test = new eventEmitter;
test.on("myEvent", onMyEvent);
function onMyEvent(param){
    console.log(param.name, param.age);
    console.log(arguments[0],arguments[1]);
}
//test.emit('myEvent', {name:'Vet', age:26});
test.emit('myEvent', 'vet', 'hello');
//test.emit('myEvent', 'Test number two');