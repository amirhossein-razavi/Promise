const worker = require('./worker-promise');

// worker.now();
// worker.oneSec()
//   .then(worker.twoSec)
//   .then(worker.threeSec)
//   .then(worker.fiveSec)
//   .then(() => console.log('done'));

const run = async () => {
  try {
    const result0 = await worker.now();
    console.log('First Result:', result0);
    const result1 = await worker.oneSec();
    console.log('Second Result:', result1);
    const result2 = await worker.twoSec();
    console.log('Third Result:', result2);
    const result3 = await worker.threeSec();
    console.log('Fourth Result:', result3);
    const result5 = await worker.fiveSec();
    console.log('Fifth Result:', result5);

    console.log('done');
  } catch (err) {
    console.error(err.message);
  }
};

const runAll = async () => {
  try {
    const [a, b, c, d, e] = await Promise.all([
      worker.now(),
      worker.oneSec(),
      worker.twoSec(),
      worker.threeSec(),
      worker.fiveSec(),
    ]);

    console.log('Results:', a, d, e)

    console.log('done');
  } catch (err) {
    console.error(err.message);
  }
};

runAll()
  // .then(runAll);