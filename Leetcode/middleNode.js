class SinglyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new SinglyLinkedList(3);
let node2 = new SinglyLinkedList(2);
let node3 = new SinglyLinkedList(0);
let node4 = new SinglyLinkedList(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// node1 is the head of the linked list

const middleNode = (head) => {
  let fast = head,
    slow = head;
  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

console.log(middleNode(node1));
