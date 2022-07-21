import useWindowDimensions from "../../hooks/useWidnowDimension";
import { MeryGoLife } from "../../fakedata";
import { AnimeListItem } from "../UI/atoms/AnimeListItem";
import { Sidebar } from "../UI/organisms/Sidebar";
import { useFetch } from "../../hooks/useFetch";

let query = `
    query ($page: Int, $perPage: Int, ) {
      Page(page: $page, perPage: $perPage){
        media(type: ANIME, sort: UPDATED_AT_DESC){
          id
          updatedAt
          coverImage {
            medium
            color
          }	
          siteUrl
          title{
            romaji
            english
            native
            userPreferred
          }
        }
      }
    }
    `;

export function MainPageV2() {
  const { width } = useWindowDimensions();

  const { data, error, loading } = useFetch({ query });

  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <div className="marry-go-round">
          <div
            className="marry-go-round__list"
            style={{
              width: `${width > 1280 ? width - 200 : width - 110}px`,
            }}
          >
            {MeryGoLife.map((item) => (
              <img
                src="https://plaqat.ru/images/covers/34247.jpg"
                alt=""
                key={item.key}
                className=" marry-go-round__list__item"
              />
            ))}
          </div>
          <div>dots</div>
        </div>
        <div
          className="anime-list-container"
          style={{ width: `${width > 1280 ? width - 100 : width - 0}px` }}
        >
          {data?.data.Page.media.map((anime: any) => {
            return <AnimeListItem key={anime.id} anime={anime} />;
          })}
        </div>
      </div>
    </div>
  );
}
