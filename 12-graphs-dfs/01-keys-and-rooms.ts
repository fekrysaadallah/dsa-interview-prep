/**
 * 841. Keys and Rooms
 * Link: https://leetcode.com/problems/keys-and-rooms/
 * Time: O(v + e)
 * Space: O(v)
 */

function canVisitAllRooms(rooms: number[][]): boolean {
  const visitedRooms = rooms.map(() => false);

  const visit = (index: number) => {
    if (visitedRooms[index]) return;
    visitedRooms[index] = true;

    const nextRooms = rooms[index];

    nextRooms.forEach(visit);
  };
  visit(0);
  return visitedRooms.every(Boolean);
}
