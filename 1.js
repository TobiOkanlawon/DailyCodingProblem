// arrays, iteration, algorithmic complexity.
/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const solution = function (list, k) {
  /*
  takes two arguments: list, k.
  returns true if two numbers in list add up to k.
  */

  for (let i = 0; i < list.length; i++) {
    if (list.includes(k - list[i])) {
      return true;
    }
  }
  return false;
};

console.log(solution([10, 15, 3, 7], 17));
