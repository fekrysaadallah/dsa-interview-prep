/**
 * 1732. Find the Highest Altitude
 * Link: https://leetcode.com/problems/find-the-highest-altitude/
 * Time: O(n)
 * Space: O(1)
 */

function largestAltitude(gain: number[]): number {
  let maxAltitude = 0;
  let altitude = 0;

  for (let index = 0; index < gain.length; index++) {
    const currentGain = gain[index];
    altitude += currentGain;

    if (altitude > maxAltitude) maxAltitude = altitude;
  }

  return maxAltitude;
}
