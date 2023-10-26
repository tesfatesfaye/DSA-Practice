const reverseList = (head, prev = null) => {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};
