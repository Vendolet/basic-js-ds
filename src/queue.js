const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.root = null;
  }

  getUnderlyingList() {


    return this.root;

  }

  enqueue(value) {

    function addFunc(node, value){
      if (!node){
        return new ListNode(value);
      }

      node.next = addFunc(node.next, value);
      
      return node;
    }

    this.root = addFunc(this.root, value);
  }

  dequeue() {
    if (!this.root){
      return null;
    }
    let firstElem = this.root;

    this.root = firstElem.next;

    return firstElem.value;
  }
}

module.exports = {
  Queue
};

