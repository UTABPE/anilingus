import { useRef } from "react";

export const AnimeListItem = ({ anime }: any) => {
  // const itemRef = useRef<any>(undefined);
  // const titleRef = useRef<any>(undefined);
  var date = new Date(anime.updatedAt * 1000);
  return (
    <a className="anime-list-item" href={anime.siteUrl}>
      <div className="anime-list-item__coverImage">
        <img src={anime.coverImage.medium} alt="" />
      </div>
      <div className="anime-list-item-description">
        <div className="anime-list-item-description__date">
          {date.toDateString()}
        </div>
        <div className="anime-list-item-description__title">
          {anime.title.userPreferred}
        </div>
      </div>
    </a>
  );
};
