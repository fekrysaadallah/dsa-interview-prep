/**
 * 724. Find Pivot Index
 * Link: https://leetcode.com/problems/find-pivot-index/
 * Time: O(n)
 * Space: O(1)
 */

function pivotIndex(nums: number[]): number {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  let accumaltedSum = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    accumaltedSum += element;

    const leftSum = accumaltedSum - nums[index];
    const rightSum = sum - accumaltedSum;

    if (leftSum === rightSum) return index;
  }

  return -1;
}
