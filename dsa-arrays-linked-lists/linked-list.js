/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head !== null) newNode.next = this.head;

    if (this.tail === null) this.tail = newNode;

    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    // could also check if val of head is null
    if (this.length === 0) throw new Error("LinkedList is empty!");

    let curr = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return curr.val;
    }

    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    
    let lastItem = curr.next.val;
    curr.next = null
    this.tail = curr;
    this.length -= 1;

    return lastItem;
  }

  /** shift(): return & remove first item. */

  shift() {
    // could also check if val of head is null
    if (this.length === 0) throw new Error ("LinkedList is empty!");

    let curr = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return curr.val;
    }

    this.head = curr.next;
    this.length -= 1;

    return curr.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length) throw new Error("Invalid index!");

    let count = 0;
    let curr = this.head;

    while (count < idx) {
      curr = curr.next;
      count += 1;
    }

    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) throw new Error("Invalid index!");

    let count = 0;
    let curr = this.head;

    while (count < idx) {
      curr = curr.next;
      count += 1;
    }

    curr.val = val;

    return curr.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) throw new Error("Invalid index!");

    // if new Node will be the tail, add at end.
    if (idx === this.length) {
      this.push(val);
    } else {
      let count = 0;
      let prev = this.head;
      let curr = this.head;
  
      // find new Node placement
      while (count < idx) {
        prev = curr;
        curr = curr.next;
        count += 1;
      }
  
      let newNode = new Node(val);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length) throw new Error("Invalid index!");

    if (idx === this.length || idx === 0) {
      this.pop();
    } else {
      let count = 0;
      let prev = this.head;
      let curr = this.head;

      // find Node to remove
      while (count < idx) {
        prev = curr;
        curr = curr.next;
        count += 1;
      }

      prev.next = curr.next;
      this.length -= 1;

      return curr.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let curr = this.head;

    if (this.length === 0) {
      return 0;
    }
    
    while (curr !== this.tail) {
      total += curr.val;
      curr = curr.next;
    }

    total += this.tail.val;
    
    return total / this.length;
  }
}

module.exports = LinkedList;
