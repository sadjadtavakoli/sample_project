var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.addListener('connection', ()=>{
   //  do nithign
   // some new lines 
   // let's see what's going on here
});

eventEmitter.emit('connection');
eventEmitter.emit('connection2');
