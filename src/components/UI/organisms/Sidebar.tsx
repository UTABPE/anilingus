import { SibarButtons } from "../../../fakedata";
import { ButtonHover } from "../atoms/ButtonHover";
import { useState, useEffect } from "react";
import { DropdownGenres } from "./DropdownGenres";
import { useFetch } from "./../../../hooks/useFetch";
const query = `
  query {
    GenreCollection
  }
`;
export const Sidebar = () => {
  const [hover, setHover] = useState({ open: false, name: "" });
  const { data, error, loading } = useFetch(query);
  // console.log(data);
  return (
    <section className="layout-sider">
      <ul className="flex flex-col gap-2">
        {SibarButtons.map((button) => (
          <li
            key={button.name}
            onMouseEnter={() => setHover({ open: true, name: button.name })}
            onMouseLeave={() => setHover({ open: false, name: button.name })}
          >
            <ButtonHover key={button.key}>{button.name}</ButtonHover>
            {hover.open && hover.name === button.name && (
              <DropdownGenres data={data} name={hover.name} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
