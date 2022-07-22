import React from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { GetSearchedAnime } from "../../../api/api";
import { GlobalContext } from "../../../GlobalContext";
import { Button } from "../atoms/Button";
import { Search } from "../atoms/Search";

const query = `
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage){
      media(id: $id, search: $search){
        id
        title{
          english
          userPreferred
        }
        coverImage{
          large
        }
        description
        status
        startDate {
          year
          month
          day
        }
        genres
        averageScore
        siteUrl
      }
    }
  }
`;

export function NavbarV2() {
  const globalContext = React.useContext(GlobalContext);

  const SearchHandle = (e: React.FormEvent<HTMLInputElement>) => {
    globalContext?.setSearchInput(e.currentTarget.value);
  };

  React.useEffect(() => {
    const searchTimout = setTimeout(() => {
      if (globalContext?.searchInput) {
        GetSearchedAnime({
          query: query,
          search: globalContext?.searchInput,
        }).then((data) => globalContext?.setFiltredAnime(data));
        globalContext?.setIsFiltred(true);
      } else {
        globalContext?.setIsFiltred(false);
      }
    }, 1000);

    return () => {
      clearTimeout(searchTimout);
    };
  }, [globalContext?.searchInput]);

  // console.log(globalContext?.filtredAnime);

  return (
    <section className="navbar-container">
      <h1 className="navbar-container__logo">ANILINGUS</h1>
      <Search
        placeholder="Search"
        className="navbar-container__search"
        onChange={SearchHandle}
      />
      <div className="navbar-container-buttons">
        <Button>ТОП 100</Button>
        <Button>Аниме</Button>
        <Button>Манга</Button>
        <Button>Всякое Мое</Button>
      </div>

      <div className="navbar-container-menu">
        <Button className="navbar-container-buttons__button">
          <UserOutlined />
        </Button>
        <Button className="navbar-container-buttons__button">
          <MenuOutlined />
        </Button>
      </div>
    </section>
  );
}
