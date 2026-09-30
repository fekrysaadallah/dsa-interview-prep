/**
 * 547. Number of Provinces
 * Link: https://leetcode.com/problems/number-of-provinces/
 * Time: O(n*n)
 * Space: O(n)
 */

function findCircleNum(isConnected: number[][]): number {
  let result = 0;
  const visited = new Array(isConnected.length).fill(0);

  const visit = (index: number) => {
    if (visited[index]) return;
    visited[index] = true;

    isConnected[index]
      .map((isConnected, index) => ({ isConnected, index }))
      .filter(({ isConnected }) => isConnected)
      .forEach(({ index }) => visit(index));
  };

  isConnected.forEach((_, index) => {
    if (!visited[index]) result++;
    visit(index);
  });

  return result;
}
