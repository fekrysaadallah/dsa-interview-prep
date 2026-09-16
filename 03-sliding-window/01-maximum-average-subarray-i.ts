/**
 * 643. Maximum Average Subarray I
 * Link: https://leetcode.com/problems/maximum-average-subarray-i/
 */

/**
 * Time: O(n × k)
 * Space: O(k)
 */
function findMaxAverage(nums: number[], k: number): number {
  let max = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);

  for (let index = k; index < nums.length; index++) {
    const currentSequnceStart = index - k;

    let candidateMax = nums
      .slice(currentSequnceStart + 1, currentSequnceStart + 1 + k)
      .reduce((acc, cur) => acc + cur, 0);

    if (candidateMax > max) max = candidateMax;
  }

  return max / k;
}

/**
 * Time: O(n)
 * Space: O(k)
 */
function findMaxAverageV2(nums: number[], k: number): number {
  let max = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let previousWindowSum = max;

  for (let index = k; index < nums.length; index++) {
    const currentSequnceStart = index - k;

    let candidateMax = previousWindowSum - nums[currentSequnceStart] + nums[index];
    previousWindowSum = candidateMax;

    if (candidateMax > max) max = candidateMax;
  }

  return max / k;
}
