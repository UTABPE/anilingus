import { useGetMousePosition } from "../../../hooks/useGetMousePosition";

export const MouseCircle = () => {
  const { position } = useGetMousePosition();
  console.log(position)
  return (
    <div
      className="mouse-circle"
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        background: "black",
        left: `${position.x - 25}px`,
        top: `${position.y - 25}px`,
      }}
    ></div>
  );
};
