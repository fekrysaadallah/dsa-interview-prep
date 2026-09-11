/**
 * 1431. Kids With the Greatest Number of Candies
 * Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * Time: O(n)
 * Space: O(n)
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);

  return candies.map((c) => c + extraCandies >= max);
}
