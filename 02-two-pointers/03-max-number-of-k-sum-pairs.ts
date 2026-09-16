/**
 * 1679. Max Number of K-Sum Pairs
 * Link: https://leetcode.com/problems/max-number-of-k-sum-pairs/
 * Time: O(n log n)
 * Space: O(log n)
 */

function maxOperations(nums: number[], k: number): number {
  let leftIndex = 0;
  let righIndex = nums.length - 1;

  let result = 0;

  nums.sort((a, b) => a - b);
  while (leftIndex < righIndex) {
    const sum = nums[leftIndex] + nums[righIndex];

    if (sum === k) {
      result++;
      leftIndex++;
      righIndex--;
      continue;
    }

    if (sum < k) {
      leftIndex++;
      continue;
    }

    if (sum > k) {
      righIndex--;
      continue;
    }
  }

  return result;
}
