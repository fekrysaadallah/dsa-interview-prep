/**
 * 345. Reverse Vowels of a String
 * Link: https://leetcode.com/problems/reverse-vowels-of-a-string/
 * Time: O(n)
 * Space: O(n)
 */

function reverseVowels(s: string): string {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const vowelsIndexes: number[] = [];

  const chars = s.split('');

  chars.forEach((char, index) => {
    if (VOWELS.includes(char)) vowelsIndexes.push(index);
  });

  for (let index = 0; index < vowelsIndexes.length / 2; index++) {
    const left = vowelsIndexes[index];
    const right = vowelsIndexes[vowelsIndexes.length - 1 - index];

    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
  }

  return chars.join('');
}
