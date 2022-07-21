import { useEffect, useState } from "react";

export type PositionType = {
  x: number;
  y: number;
};

let position: PositionType = {
  x: 0,
  y: 0,
};

export const useGetMousePosition = () => {
  const [position, setPosition] = useState<PositionType>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMoveHandle = (e: MouseEvent) => {
      // position.x = e.x;
      // position.y = e.y;
      setPosition({x: e.x, y: e.y + window.pageYOffset})
    };

    let timeout = setTimeout(() => {
      window.addEventListener("mousemove", mouseMoveHandle);
    }, 5);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
      clearTimeout(timeout);
    };
  }, [position]);

  return { position };
};
