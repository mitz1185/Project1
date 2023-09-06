// Importing events
const E = require('events');
  
// Initializing event emitter instances 
var ee = new E();
   
var Mark1= (msg) => {
    console.log("Message from Mark1: " + msg);
};
   
var Mark2 = (msg) => {
    console.log("Message from Mark2: " + msg);
};
  
// Registering geek1 and geek2
ee.on('myEvent', Mark1);
ee.on('myEvent', Mark1);
ee.on('myEvent', Mark2);

   
// Removing listener geek1 that was
// registered on the line 13
ee.removeListener('myEvent', Mark1);
   
// Triggering myEvent
ee.emit('myEvent', "Event occurred");
  
// Removing all the listeners to myEvent
ee.removeAllListeners('myEvent');
  
// Triggering myEvent
ee.emit('myEvent', "Event occurred");
