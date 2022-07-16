import { SibarButtons } from "../../../fakedata";
import { ButtonHover } from "../atoms/ButtonHover";
import { useState, useEffect } from "react";
import { DropdownSider } from "../atoms/DropdownSider";

export const Sidebar = () => {

  const [hover, setHover] = useState({ open: false, name: "" });
  return (
    <section className="layout-sider"> 
      <ul className="flex flex-col gap-2">
        {SibarButtons.map((button) => (
          <li
            key={button.name}
            onMouseDown={() => setHover((old) => {return {open: true, name: button.name }})}
            
          >
            <ButtonHover key={button.key}>{button.name}</ButtonHover>
            <DropdownSider  open={hover.name === button.name && hover.open} tabs={button.tabs} hover={setHover}/>
          </li>

        ))}
      </ul>
    </section>
  );
};
