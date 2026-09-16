/**
 * 392. Is Subsequence
 * Link: https://leetcode.com/problems/is-subsequence/
 * Time: O(t)
 * Space: O(1)
 */

function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) sIndex++;

    tIndex++;
  }

  return sIndex === s.length;
}
