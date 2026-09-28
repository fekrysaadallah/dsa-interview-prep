/**
 * 1207. Unique Number of Occurrences
 * Link: https://leetcode.com/problems/unique-number-of-occurrences/
 * Time: O(n)
 * Space: O(n)
 */

function uniqueOccurrences(arr: number[]): boolean {
  const occurrences = arr.reduce(
    (acc, cur) => {
      acc[cur] = acc[cur] || 0;
      acc[cur]++;
      return acc;
    },
    {} as Record<number, number>,
  );

  const occurrencesArr = Object.values(occurrences);

  return occurrencesArr.length === new Set(occurrencesArr).size;
}
