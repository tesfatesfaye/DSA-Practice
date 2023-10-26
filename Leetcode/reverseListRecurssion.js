var reverseList = function (head, next = null, prev = null) {
  if (!head) return null;
  next = head.next;
  head.next = prev;
  let val = reverseList(next, prev, head);
  return val ?? head;
};
