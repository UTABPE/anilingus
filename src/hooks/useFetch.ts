import { useEffect, useState } from "react";

const url = "https://graphql.anilist.co";

type FetchVariablesType = {
  page: number;
  perPage: number;
};

interface FetchProps {
  query: string;
  variables?: FetchVariablesType;
};


export const useFetch = ({query, variables}: any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  let options = {
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
