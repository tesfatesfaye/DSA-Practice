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
console.log(node1);

const removeNthFromEnd = (head, n) => {
  if (!head) return null;
  const dummyNode = new SinglyLinkedList(0);
  dummyNode.next = head;
  let slow = head,
    fast = head;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyNode.next;
};
