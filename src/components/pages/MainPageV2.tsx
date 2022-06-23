import { Divider, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

import useWindowDimensions from "./../../hooks/useWidnowDimension";

import { MeryGoLife, SibarButtons, NewAnime } from "../../fakedata";
import { Title } from "./../UI/atoms/Title";
import { useEffect, useRef, useState } from "react";
import { AnimeListItem } from "../UI/atoms/AnimeListItem";
var query = `
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

var variables = {
  // search: "Fate/Zero",
  page: 1,
  perPage: 25,
};

var url = "https://graphql.anilist.co",
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };
export function MainPageV2() {
  const { width } = useWindowDimensions();
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((resp) => resp.json())
      // .then((data) => console.log(data));
      .then((data) => setAnimeList(data.data.Page.media));
    console.log(animeList);
  }, [variables]);
  return (
    <div className="layout">
      <div className="layout-sider">SIDER</div>
      <div className="layout-content">
        <div className="marry-go-round">
          <div
            className="marry-go-round__list"
            style={{
              width: `${width > 1024 ? width - 200 : width - 110}px`,
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
          style={{ width: `${width > 1024 ? width - 100 : width - 0}px` }}
        >
          {animeList?.map((anime: any, index) => {
            return <AnimeListItem key={anime.id} anime={anime} />;
          })}
        </div>
      </div>
    </div>
  );
}
