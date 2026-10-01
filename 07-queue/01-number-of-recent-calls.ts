/**
 * 933. Number of Recent Calls
 * Link: https://leetcode.com/problems/number-of-recent-calls/
 */

/**
 * Time: O(n * n)
 * Space: O(n)
 */
class RecentCounter {
  recentRequests: number[];

  constructor() {
    this.recentRequests = [];
  }

  ping(t: number): number {
    this.recentRequests.push(t);
    const result = this.recentRequests.filter((c) => c >= t - 3000);
    return result.length;
  }
}

/**
 * Time: O(n)
 * Space: O(n)
 */
class RecentCounterV2 {
  recentRequests: number[];

  constructor() {
    this.recentRequests = [];
  }

  ping(t: number): number {
    const START_TIMESTAMP = t - 3000;
    while (this.recentRequests.length && this.recentRequests[0] < START_TIMESTAMP)
      this.recentRequests.shift();

    this.recentRequests.push(t);

    return this.recentRequests.length;
  }
}
