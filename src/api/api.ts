import React from "react";
import { GlobalContext } from "../GlobalContext";

const APIURL = "https://graphql.anilist.co";

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: "",
    variables: {},
  }),
};

interface SearchPropsType {
  query: string;
  search: string;
}

const GetUpdatedAnime = () => {
  return 0;
};

const GetSearchedAnime = async (props: SearchPropsType) => {

  let data,
    error,
    loading = false;

  options.body = JSON.stringify({
    query: props.query,
    variables: {
      page: 1,
      perPage: 10,
      search: props.search,
    },
  });

  await fetch(APIURL, options)
    .then((resp) => resp.json())
    .then((respJson) => (data = respJson));

  // console.log(options.body);

  return data;
};

export { GetUpdatedAnime, GetSearchedAnime };
