import { Divider, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Title } from "../UI/atoms/Title";
import { Button } from "./../UI/atoms/Button";
import { ButtonHover } from "./../UI/atoms/ButtonHover";
import { ButtonMGR } from "./../UI/atoms/ButtonMarryGoRound";

import { MeryGoLife, SibarButtons, NewAnime } from "../../fakedata";
import { useEffect } from "react";

export function MainPage() {
  var query = `
    query ($id: Int, $page: Int, $perPage: Int, ) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        mediaTrends(mediaId: $id, ){
          mediaId
          date
          media{
            title{
              english
            }
          }
          
        }
      }
    }
    `;

  var variables = {
    // search: "Fate/Zero",
    page: 1,
    perPage: 3,
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

  useEffect(() => {
    // fetch(url, options).then((data) => console.log(data.json()));
  }, [variables]);

  return (
    <Layout className="max-w-[1280px] p-5 layout gap-10">
      <Header className="layout">Header</Header>
      <Layout className="flex flex-row">
        <Sider className="layout">
          <div className="flex flex-col gap-2">
            {SibarButtons.map((button) => (
              <ButtonHover key={button.key}>{button.name}</ButtonHover>
            ))}
          </div>
        </Sider>
        <ButtonMGR className="">{"<"}</ButtonMGR>
        <Content className="flex flex-row overflow-auto whitespace-nowrap ">
          <div className="flex flex-row gap-[14px]">
            {MeryGoLife.map((item) => (
              <img
                src="https://plaqat.ru/images/covers/34247.jpg"
                alt=""
                key={item.key}
                className="w-[114px]"
              />
            ))}
          </div>
        </Content>
        <ButtonMGR className="">{">"}</ButtonMGR>
      </Layout>
      <Layout className="flex flex-row min-w-0">
        <Sider className="layout">sider</Sider>
        <Content className="layout">
          <Title level={3}>Новые серии аниме на Anilingus</Title>
          <div>
            {NewAnime.map((anime) => {
              return (
                <>
                  <div key={anime.key} className="h-16">
                    <Title level={5}>{anime.title}</Title>
                    <div>{anime.plot}</div>
                  </div>
                  <Divider />
                </>
              );
            })}
          </div>
        </Content>
      </Layout>
      <Footer className="layout">Footer</Footer>
    </Layout>
  );
}
