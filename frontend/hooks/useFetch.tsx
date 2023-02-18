import { useEffect, useState } from "react";

interface reviewType  {
  data: [
    {
      id: number,
      attributes: {
        title: string;
        rating: number;
        body: string;
      };
    }
  ];
}

function useFetch(url: string) {
  const [data, setData] = useState<reviewType>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
}

export default useFetch;
