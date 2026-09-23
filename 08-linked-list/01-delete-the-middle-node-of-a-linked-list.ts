/**
 * 2095. Delete the Middle Node of a Linked List
 * Link: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
 * Time: O(n)
 * Space: O(1)
 */

/** Definition for singly-linked list.  */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// TODO: Needs improvements
function deleteMiddle(head: ListNode | null): ListNode | null {
  let listLength = 0;

  let countingNode: ListNode | null = head;
  while (countingNode) {
    listLength++;
    countingNode = countingNode.next;
  }

  if (listLength === 1) return null;

  const index = Math.floor(listLength / 2);
  let head2: ListNode | null = head;

  for (let k = 1; k <= index; k++) {
    if (k === index && head2?.next) {
      head2.next = head2.next?.next || null;
    }

    head2 = head2?.next || null;
  }

  return head;
}
