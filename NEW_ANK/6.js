const E = require('events');

const ee = new E();
ee.on('start', () => {
    console.log('started');
  });

  ee.emit('start');