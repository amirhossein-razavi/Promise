const moment  = require('moment');

const log = (name) => {
  console.log(name, moment().format('HH:mm:ss'));
};

module.exports = {
  now: () => {
    return new Promise((resolve, reject) => {
      setImmediate(() => {
        log('now');
        resolve(0);
        console.log('Unauthorised code');
      }, 'now');
    });
  },
  oneSec: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        log('1 sec:');
        resolve(1);
      }, 1000);
    });
  },
  twoSec: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        log('2 sec:');
        resolve(2);
      }, 1000);
    });
  },
  threeSec: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        log('3 sec:');
        resolve(3);
      }, 1000);
    });
  },
  fiveSec: (cb) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        log('5 sec:');
        resolve(5);
      }, 1000);
    });
  },
};
