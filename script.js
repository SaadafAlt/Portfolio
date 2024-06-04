/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {

    return function () {
        return n++;
    };
};


const counter = createCounter(10);
// console.log(counter);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12


/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal!!");
            else return true;
        }
    }
};

console.log("hello");
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5));
// expect(5).notToBe(5); // throws "Equal"
