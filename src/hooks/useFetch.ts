import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://graphql.anilist.co";
export const useFetch = (query: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  var variables = {
    page: 1,
    perPage: 25,
  };
  var options = {
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
    try {
      setLoading(true);
      fetch(url, options)
        .then((resp) => resp.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [query]);
  return { data, error, loading };
};
