// TODO: Implement cancellable function that will cancel the execution of the function after t milliseconds.

/**
 * @param {Function} fn
 * @param {Array} args is an array of arguments
 * @param {number} t represents a timeout in t milliseconds
 * @return {Function} return a function cancelFunction
 */
var cancellable = function (fn, args, t) {
  setTimeout(fn, t);
};

/* Interpretation: 
- The return was determined by cancelTimeMs being greater than t ms.
    • Bc the cancellation was scheduled to occur after a delay of cancelTimeMs = 50 —
    which occurs AFTER t = 20 ms, the execution of fn(args) proceeds. 
    
    • However, if cancellation ms time is a value LESS than t, the execution of
    fn(args) should NOT be called. 
*/

const result = [];

const fn = (x) => x * 5;
const args = [2];
const t = 20
const cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
