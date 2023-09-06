const E = require('events');

const ee = new E();
ee.addListener('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
  ee.emit('start', 1, 100);