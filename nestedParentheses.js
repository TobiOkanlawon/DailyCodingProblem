/* 
A common problem for compilers and text editors is 
determining whether the parentheses in a string are 
balanced and properly nested. 

For example, the string ((())())() contains properly nested pairs of parentheses, 
which the strings )()( and ()) do not. 
Give an algorithm that returns true if a string contains properly nested and balanced parentheses, 
and false if otherwise. 
For full credit, 
identify the position of the first offending parenthesis 
if the string is not properly nested and balanced.

*/

class LinkedListNode {
  constructor(val, prev = null, next = null) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return newNode.value;
  }

  deleteTail() {
    if (this.length === 1) {
      // if there is only one node in the list
      // That is, if the head == tail.
      const node = this.tail;
      this.head = this.tail = null;
      this.length -= 1;
      return node;
    } else if (this.length === 0) {
      return null;
    } else {
      const currentTail = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length -= 1;
      return currentTail;
    }
  }

  isEmpty() {
    return this.length > 0;
  }
}

// const newList = new List();
// newList.add(4);
// newList.add(5);
// console.log(newList);

class Stack {
  // a stack implemented with a linked list.
  // for elegance, and performance benefits.
  // like that matters :)
  constructor() {
    this.list = new List();
  }

  push(val) {
    this.list.add(val);
  }

  pop() {
    return this.list.deleteTail();
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

const solutionStack = new Stack();

function checkParentheses(parentheses) {
  for (let i = 0; i < parentheses.length; i++) {
    switch (parentheses[i]) {
      case "(":
        solutionStack.push(i);
        break;
      case ")":
        if (!solutionStack.pop()) {
          return i;
        }
        break;
      default:
        throw new Error("String contains text that is not a parentheses");
    }
  }
  if (solutionStack.length === 0) {
    return true;
  }
  return false;
}

// console.log(checkParentheses("((())())()"));
// console.log(checkParentheses(")()("));
// console.log(checkParentheses("())"));
