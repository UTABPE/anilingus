import React, { Dispatch, SetStateAction } from "react";

type DropdownSiderProps = {
  open: boolean;
  tabs: string[];
  hover: Dispatch<SetStateAction<{ open: boolean; name: string }>>;
};

export const DropdownSider: React.FC<DropdownSiderProps> = (props) => {
  return (
    <section
      className="sidebar-dropdown"
      style={{
        // opacity: `${props.open ? 1 : 0}`,
        display: `${props.open ? "block" : "none"}`,
      }}
      onMouseLeave={() =>
        props.hover((old) => {
          return { ...old, open: false };
        })
      }
    >
      <ul className="dropdown__list">
        {props.tabs.map((tab) => (
          <li key={tab}>
            <a href="#">{tab}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
