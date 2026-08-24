/**
 * LeetCode 1768. Merge Strings Alternately
 * Link: https://leetcode.com/problems/merge-strings-alternately/
 * Time: O(n + m)
 * Space: O(n + m)
 */

function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  let word1Index = 0;
  let word2Index = 0;

  for (let index = 0; index < word1.length + word2.length; index++) {
    if ((index % 2 === 0 && word1Index < word1.length) || word2Index >= word2.length) {
      result += word1[word1Index];
      word1Index++;
    } else {
      result += word2[word2Index];
      word2Index++;
    }
  }

  return result;
}

function mergeAlternatelyV2(word1: string, word2: string): string {
  let result = '';
  const maxLength = Math.max(word1.length, word2.length);

  for (let index = 0; index < maxLength; index++) {
    if (word1.length > index) result += word1[index];
    if (word2.length > index) result += word2[index];
  }

  return result;
}
