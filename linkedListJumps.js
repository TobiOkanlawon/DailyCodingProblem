/* 
You are given a singly linked list node containing positive integers.
Return the same linked list where every node's next points to the node val nodes ahead.
If there's no such node, next should point to null.
*/

class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const customTraversal = (node, n) => {
  /* 
  Moves n times down the linked list.
  takes the argument node, which is the node to traverse from
  Takes the argument n, which is the number of nodes to move.

  Returns the node at node + n
  */
  let currentNode = node;
  for (let i = 0; i < n; i++) {
    if (currentNode) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
  return currentNode;
};

const solve = (node) => {
  if (node == null) {
    return null;
  }
  node.next = solve(customTraversal(node, node.val));
  return node;
};

// const list = new LLNode(2);
// const list2 = new LLNode(1);
// const list3 = new LLNode(4);
// const list4 = new LLNode(1);

// list.next = list2;
// list2.next = list3;
// list3.next = list4;

// // console.log(list4);
// console.log(solve(list));
// // customTraversal(list, 3);
// //console.log();
