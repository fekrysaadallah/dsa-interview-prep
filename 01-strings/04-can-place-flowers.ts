/**
 * 605. Can Place Flowers
 * Link: https://leetcode.com/problems/can-place-flowers/
 * Time: O(n)
 * Space: O(1)
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let possibleFlowers = 0;

  for (let index = 0; index < flowerbed.length; index++) {
    const isEmpty = !flowerbed[index];
    const isNextEmpty = index === flowerbed.length - 1 ? true : !flowerbed[index + 1];
    const isPreviousEmpty = index === 0 ? true : !flowerbed[index - 1];

    if (isEmpty && isNextEmpty && isPreviousEmpty) {
      possibleFlowers++;
      flowerbed[index] = 1;
    }
  }

  return possibleFlowers >= n;
}
