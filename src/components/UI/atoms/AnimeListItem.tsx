import { useRef } from "react";

export const AnimeListItem = ({ anime }: any) => {
  const itemRef = useRef<any>(undefined);
  const titleRef = useRef<any>(undefined);
  console.log(itemRef?.current?.offsetWidth);
  console.log(titleRef?.current?.offsetWidth);
  return (
    <div ref={itemRef} className="anime-list-item">
      <div className="anime-list-item__title">{anime.title}</div>
      <span className="anime-list-item__plot" ref={titleRef}>
        {anime.plot}
        {titleRef?.current?.offsetWidth > itemRef?.current?.offsetWidth &&
          "..."}
      </span>
      {titleRef?.current?.offsetWidth > itemRef?.current?.offsetWidth && "..."}
    </div>
  );
};
