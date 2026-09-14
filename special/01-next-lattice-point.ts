/**
 * Toptal Interview Problem: Next Lattice Point
 * Description: Given two points A and B in a 2D plane, find the next lattice point C that lies on the line perpendicular to AB and passes through B.
 * Time: O(log(min(a, b))) for GCD calculation
 * Space:  O(1)
 */

function nextLatticePoint(a: [number, number], b: [number, number]): [number, number] {
  // # 1 Calc Slop Of AB Line
  const abXDelta = b[0] - a[0];
  const abYDelta = b[1] - a[1];

  // # 2 Calc Slop Of BC Line
  const bcXDelta = abYDelta;
  const bcYDelta = -abXDelta;

  // # 3 Get GCD For GCD(bcYDelta, bcXDelta)
  const gcd = gcdCalc(bcXDelta, bcYDelta);

  // # 4 x shift, and y shift
  const xShift = bcXDelta / gcd;
  const yShift = bcYDelta / gcd;

  return [b[0] + xShift, b[1] + yShift];
}

function gcdCalc(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
