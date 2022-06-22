import { Divider, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

import useWindowDimensions from "./../../hooks/useWidnowDimension";

import { MeryGoLife, SibarButtons, NewAnime } from "../../fakedata";
import { Title } from "./../UI/atoms/Title";
import { useRef } from "react";
import { AnimeListItem } from "../UI/atoms/AnimeListItem";

export function MainPageV2() {
  const { width } = useWindowDimensions();
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
          {NewAnime.map((anime, index) => {
            return <AnimeListItem key={anime.key} anime={anime} />;
          })}
        </div>
      </div>
    </div>
  );
}
