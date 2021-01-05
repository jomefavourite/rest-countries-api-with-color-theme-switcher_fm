import {useState, useEffect} from "react";
import axios from "axios";

export function useAxios(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
    });

    axios
      .get(url)
      .then(response => {
        setRequest({
          loading: false,
          data: response.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [url]);

  return request;
}
