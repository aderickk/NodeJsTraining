var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log("I hear a howl!!");
}

eventEmitter.on('howl', myEventHandler);

eventEmitter.emit('howl');