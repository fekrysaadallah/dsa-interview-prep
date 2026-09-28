/**
 * 2215. Find the Difference of Two Arrays
 * Link: https://leetcode.com/problems/find-the-difference-of-two-arrays/
 * Time: O(n + m)
 * Space: O(n + m)
 */

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result: number[][] = [[], []];

  for (const element of set1) {
    if (!set2.has(element)) result[0].push(element);
  }

  for (const element of set2) {
    if (!set1.has(element)) result[1].push(element);
  }

  return result;
}
