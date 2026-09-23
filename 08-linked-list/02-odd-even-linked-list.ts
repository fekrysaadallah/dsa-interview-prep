/**
 * 328. Odd Even Linked List
 * Link: https://leetcode.com/problems/odd-even-linked-list/
 * Time: O(n)
 * Space: O(1)
 */

// TODO: Needs improvements
function oddEvenList(head: ListNode | null): ListNode | null {
  const oddList = head;
  const evenList = head?.next || null;

  let oddHead: ListNode | null = oddList;
  let evenHead: ListNode | null = evenList;

  while (oddHead?.next?.next || evenHead) {
    if (oddHead?.next?.next) {
      const nextOdd = oddHead.next?.next || null;
      oddHead.next = nextOdd;
      oddHead = nextOdd;
    }

    if (evenHead) {
      const nextEven = evenHead.next?.next || null;
      evenHead.next = nextEven;
      evenHead = nextEven;
    }
  }
  if (oddHead) oddHead.next = evenList;

  return oddList;
}
