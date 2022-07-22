import { useEffect, useState } from "react";
import {
  PositionType,
  useGetMousePosition,
} from "../../../hooks/useGetMousePosition";
import { useGetMoveAB } from "../../../hooks/useMove";

// const FISHSPEED = 0.1;

const DELAY = 120;

export const Fish = ({ FISHSPEED }: any) => {
  const { position } = useGetMousePosition();
  const [positionFish, setPostitionFish] = useState<PositionType>({
    x: 0,
    y: 0,
  });
  const { moveX, moveY, angle } = useGetMoveAB({
    A: position,
    B: positionFish,
    speed: FISHSPEED,
  });

  // console.log(angle);

  let interval = setInterval(() => {
    setPostitionFish((old) => {
      let temp = {
        x: old.x === position.x ? old.x : old.x + moveX,
        y: old.y === position.y ? old.y : old.y + moveY,
      };
      return temp;
    });
  }, DELAY);

  setTimeout(() => {
    clearInterval(interval);
  }, DELAY);

  // useEffect(() => {
  //   let interval = setTimeout(() => {
  //     setPostitionFish((old) => {
  //       let temp = {
  //         x: old.x < position.x ? old.x + FISHSPEED : old.x - FISHSPEED,
  //         y: old.y < position.y ? old.y + FISHSPEED : old.y - FISHSPEED,
  //       };
  //       return temp;
  //     });
  //   }, 1000)
  // return () => {
  //   clearTimeout(interval)
  // }
  // }, [position]);

  return (
    <>
      <div
        className="fish"
        style={{
          left: `${positionFish.x - 25 / 2}px`,
          top: `${positionFish.y - 25 / 2}px`,
          transform: `rotate(${angle}deg)`,
        }}
      >
        <>fish</>
      </div>
    </>
  );
};
