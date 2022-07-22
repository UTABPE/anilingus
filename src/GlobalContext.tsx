import React from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalMetaType = {
  searchInput?: string;
  updatedAnime?: any;
  filtredAnime?: any;
  isFiltred: boolean;
};

type GlobalContextType = GlobalMetaType & {
  setSearchInput: React.Dispatch<string>;
  setUpdatedAnime: React.Dispatch<any>;
  setFiltredAnime: React.Dispatch<any>;
  setIsFiltred: React.Dispatch<boolean>;
};

const GlobalContext = React.createContext<GlobalContextType | undefined>({
  searchInput: "",
  setSearchInput: () => {},
  updatedAnime: [],
  setUpdatedAnime: () => {},
  filtredAnime: [],
  setFiltredAnime: () => {},
  isFiltred: false,
  setIsFiltred: () => {},
});

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [searchInput, setSearchInput] = React.useState<string>();
  const [filtredAnime, setFiltredAnime] = React.useState<any>();
  const [updatedAnime, setUpdatedAnime] = React.useState<any>();
  const [isFiltred, setIsFiltred] = React.useState<boolean>(false);

  const value = {
    searchInput,
    setSearchInput,
    updatedAnime,
    setUpdatedAnime,
    filtredAnime,
    setFiltredAnime,
    isFiltred,
    setIsFiltred,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
