import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

export const AnimePage = () => {
  let globalContext = useContext(GlobalContext);

  console.log(globalContext?.filtredAnime?.data.Page.media)
  return (
    <section className="layout">
      <ul>

      {globalContext?.filtredAnime?.data.Page.media.map((Anime: any) => <li key={Anime.id}>{Anime.title.userPreferred}</li>)}
      </ul>
    </section>
  );
};
