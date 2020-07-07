class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    return this.head === null;
  }
  insertAtHead(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      return this;
    }
    let tempNode = new Node(value);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
  }
  insertAtTail(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      return this;
    }
    var currentNode = this.head;
    while (currentNode.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = new Node(value);
    return this;
  }
  search(value) {
    if (this.isEmpty()) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }
  deleteAtHead() {
    if (this.isEmpty()) {
      return null;
    }
    let firstElem = this.head;
    this.head = firstElem.nextElement;
    return this;
  }
  deleteVal(value) {
    if (this.isEmpty()) {
      return null;
    }
    let currentNode = this.head;
    if (currentNode.data === value) {
      this.head = currentNode.nextElement;
      return this;
    }
    while (currentNode.nextElement !== null) {
      if (currentNode.nextElement.data === value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }
  deleteAtTail() {
    if (this.isEmpty()) {
      return null;
    }
    let currentNode = this.head;
    while (
      currentNode.nextElement &&
      currentNode.nextElement.nextElement !== null
    ) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = null;
    return this;
  }
  length() {
    if (this.isEmpty()) {
      return 0;
    }
    var size = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      size = size + 1;
      currentNode = currentNode.nextElement;
    }
    return size;
  }
  setHead(newHead) {
    this.head = newHead;
    return this;
  }
  reverse() {
    if (this.isEmpty()) {
      return null;
    }
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode !== null) {
      nextNode = currentNode.nextElement;
      currentNode.nextElement = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.setHead(prevNode);
  }
  cycle() {
    let onestep = this.head;
    let twostep = this.head;
    while (onestep !== null && twostep && twostep.nextElement !== null) {
      onestep = onestep.nextElement;
      twostep = twostep.nextElement.nextElement;
      if (onestep === twostep) {
        return "cycle";
      }
    }
    return "no cycle";
  }
  findMid() {
    if (this.isEmpty()) {
      return null;
    }
    let onestep = this.head;
    let twoStep = this.head;
    while (onestep !== null && twoStep && twoStep.nextElement !== null) {
      onestep = onestep.nextElement;
      twoStep = twoStep.nextElement.nextElement;
    }
    return onestep.data;
  }
  removeDuplicates() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.nextElement === null) {
      return this;
    }
    let outerNode = this.head;
    while (outerNode !== null) {
      let innerNode = outerNode;
      while (innerNode !== null) {
        if (
          innerNode.nextElement !== null &&
          outerNode.data === innerNode.nextElement.data
        ) {
          innerNode.nextElement = innerNode.nextElement.nextElement;
        } else {
          innerNode = innerNode.nextElement;
        }
      }
      outerNode = outerNode.nextElement;
    }
    return this;
  }
  union(list1, list2) {
    if (list1.isEmpty() && list2.isEmpty()) {
      return null;
    }
    let currentNode = list1.head;
    while (currentNode.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = list2.head;
    return list1;
  }
  intersection(list1, list2) {
    let result = new LinkedList();
    var t1 = list1.head;
    var t2 = list2.head;
    while (t1 !== null) {
      while (t2 !== null) {
        if (t1.data === t2.data) {
          result.insertAtHead(t1.data);
        }
        t2 = t2.nextElement;
      }
      t2 = list2.head;
      t1 = t1.nextElement;
    }
    return result;
  }
  findNth(n) {
    let start = this.head;
    let end = this.head;
    let count = 0;
    while (count < n) {
      if (end === null) {
        console.log("out of bound");
      }
      end = end.nextElement;
      count++;
    }
    while (end !== null) {
      start = start.nextElement;
      end = end.nextElement;
    }
    return start;
  }
}

var list = new LinkedList();
list.insertAtHead(2);
list.insertAtHead(1);
list.insertAtHead(1);
list.insertAtTail(3);
console.log(list);
console.log(list.search(2));
console.log(list.search(5));
//list.deleteAtHead();
//list.deleteVal(2);
//list.deleteAtTail();
console.log(list.length());
//list.reverse();
console.log(list.findMid());
console.log(list.removeDuplicates());
var list2 = new LinkedList();
list2.insertAtHead(5);
list2.insertAtHead(4);
console.log(list.union(list, list2));
