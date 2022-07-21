interface MoveProps {
  A: {
    x: number;
    y: number;
  };
  B: {
    x: number;
    y: number;
  };
  speed: number;
}

// Returning distance that we need to move on X, Y and angle of rotation in radian
export const useGetMoveAB = ({ A, B, speed }: MoveProps) => {
  let distanceX = A.x - B.x;
  let distanceY = A.y - B.y;

  // let tan = Math.abs(distanceX) + Math.abs(distanceY);

  let moveUnit = speed / (Math.abs(distanceX) + Math.abs(distanceY) + 0.0001) + 0.001;

  return { moveX: moveUnit * distanceX, moveY: moveUnit * distanceY, angle: Math.atan2(distanceX, distanceY)*(-180/Math.PI) };
};
