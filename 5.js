/* 
cons(a, b) constructs a pair, and car(pair) and cdr(pair) 
returns the first and last element of that pair. 
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/

// Writing the function in JS
function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

const pairConstructor = function (a, b) {
  return [a, b];
};

const car = function (consFunc) {
  const pair = consFunc(pairConstructor);
  return pair[0];
};

const cdr = function (consFunc) {
  const pair = consFunc(pairConstructor);
  return pair[1];
};

console.log(cdr(cons(3, 4)));
