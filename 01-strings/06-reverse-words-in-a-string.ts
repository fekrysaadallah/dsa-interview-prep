/**
 * 151. Reverse Words in a String
 * Link: https://leetcode.com/problems/reverse-words-in-a-string/
 * Time: O(n)
 * Space: O(n)
 */

function reverseWords(s: string): string {
  return s.split(' ').filter(Boolean).reverse().join(' ');
}
