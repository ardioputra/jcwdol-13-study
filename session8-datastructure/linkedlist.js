// SINGLE LINKED LIST

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
        },
      },
    },
  },
};
console.log(list.head.next.next.next);

class Node {
  constructor(element) {
    (this.element = element), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
      console.log(node);
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      console.log(current);
    }
    this.size += 1;
  }

  printList() {
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.element);
      current = current.next;
    }
    return list;
  }

  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size -= 1;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }
}

const linkedlist = new LinkedList();

console.log(linkedlist.add("A"));
console.log(linkedlist.add("B"));
console.log(linkedlist.add("C"));
console.log(linkedlist.add("D"));
console.log(linkedlist.removeElement("B"));
console.log(linkedlist.printList())
