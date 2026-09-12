/**
 * 238. Product of Array Except Self
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Time: O(n)
 * Space: O(1)
 */

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  let accumaltor = 1;
  for (let index = 0; index < nums.length; index++) {
    result[index] = accumaltor;

    accumaltor *= nums[index];
  }

  accumaltor = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= accumaltor;

    accumaltor *= nums[index];
  }

  return result;
}
