// arrays and iteration.

/*
Given an array of integers, 
return a new array such that each element at index i of the new array
 is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const solutionWithDivision = function (list) {
  // Uses reduce to get the total number
  const totalNumber = list.reduce((aggregate, current) => current * aggregate);

  // sets the new array to the total number divided by the number at that index
  const newArray = list.map((entry) => {
    return totalNumber / entry;
  });
  return newArray;
};

const solutionWithoutDivision = function (list) {
  //
  const newArray = [];
  for (let i = 0; i < list.length; i++) {
    const mulArray = list.slice(0, i).concat(list.slice(i + 1));
    newArray.push(mulArray.reduce((aggregate, current) => aggregate * current));
  }

  return newArray;
};

console.log(solutionWithDivision([1, 2, 3, 4, 5]));
console.log(solutionWithoutDivision([1, 2, 3, 4, 5]));
