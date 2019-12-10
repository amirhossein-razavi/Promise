const moment  = require('moment');

const log = (name) => {
  console.log(name, moment().format('HH:mm:ss'));
};

module.exports = {
  now: () => {
    log('now');
  },
  oneSec: (cb) => {
    setTimeout(() => {
      log('1 sec:');
      cb();
    }, 1000);
  },
  twoSec: (cb) => {
    setTimeout(() => {
      log('2 sec:');
      cb();
    }, 2000);
  },
  threeSec: (cb) => {
    setTimeout(() => {
      log('3 sec:');
      cb();
    }, 3000);
  },
  fiveSec: (cb) => {
    setTimeout(() => {
      log('5 sec:');
      cb();
    }, 5000);
  },
};
