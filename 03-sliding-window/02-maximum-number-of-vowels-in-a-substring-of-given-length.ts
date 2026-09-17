/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 * Link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * Time: __
 * Space: __
 */

/**
 * Time: O(n)
 * Space: O(n)
 */
function maxVowels(s: string, k: number): number {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  const sArr = s.split('');

  let previousWindowCount = sArr.slice(0, k).reduce((acc, cur) => {
    if (VOWELS.includes(cur)) return acc + 1;
    return acc;
  }, 0);

  let maximumCount = previousWindowCount;

  for (let index = k; index < sArr.length; index++) {
    const element = sArr[index];
    const windowStart = index - k;

    if (VOWELS.includes(sArr[windowStart])) previousWindowCount--;
    if (VOWELS.includes(element)) previousWindowCount++;

    if (previousWindowCount > maximumCount) maximumCount = previousWindowCount;
  }

  return maximumCount;
}

/**
 * Time: O(n)
 * Space: O(1)
 */
function maxVowelsV2(s: string, k: number): number {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  let previousWindowCount = 0;

  for (let index = 0; index < k; index++) {
    const element = s[index];
    if (VOWELS.includes(element)) previousWindowCount++;
  }

  let maximumCount = previousWindowCount;

  for (let index = k; index < s.length; index++) {
    const element = s[index];
    const windowStart = index - k;

    if (VOWELS.includes(s[windowStart])) previousWindowCount--;
    if (VOWELS.includes(element)) previousWindowCount++;

    if (previousWindowCount > maximumCount) maximumCount = previousWindowCount;
  }

  return maximumCount;
}
