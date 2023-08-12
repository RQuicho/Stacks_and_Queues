/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to beginning of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      // console.log("Error: cannot remove from an empty stack.");
      throw new Error("Cannot remove from an empty stack.");
    } else {
      let toBeRemoved = this.first;
      this.first = this.first.next;
      this.size -= 1;
      if (this.size === 1) {
        this.first = this.last;
      }
      return toBeRemoved.val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) {
      console.log("Error: cannot peek from an empty queue.");
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
