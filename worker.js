const moment  = require('moment');

const log = (name) => {
  console.log(name, moment().format('HH:mm:ss'));
};

module.exports = {
  now: () => {
    log('now');
  },
  oneSec: () => {
    setTimeout(log, 1000, '1 sec:');
  },
  twoSec: () => {
    setTimeout(log, 2000, '2 sec:');
  },
  threeSec: () => {
    setTimeout(log, 3000, '3 sec:');
  },
  fiveSec: () => {
    setTimeout(log, 5000, '5 sec:');
  },
};
