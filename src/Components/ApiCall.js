import React, { useEffect, useState } from "react";
import axios from "axios";
import Body from "./Body";
function ApiCall() {
  const [SearchParam, setSearchParams] = useState("");
  const [VideoID, setVideoID] = useState("");
  const [SearchResult, setSearchResult] = useState([]);
  const PLAY_URL = `https://www.youtube.com/embed/${VideoID}`;
    const fetcher = async () => {
      const response = await axios.get(
        `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${VideoID}&format=json`
      );
      const data = await response.data;
      // console.log(data);
      setSearchResult(data);
      
    };

  

  useEffect(() => {
    fetcher();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchParam]);
  const HandleChange = (e) => {
    e.preventDefault();
    const a = e.target.value;
    const b = a.split("=");
    setSearchParams(e.target.value);
    setVideoID(b[1]);
  };

  
  return (
    <Body
      SearchParam={SearchParam}
      PLAY_URL={PLAY_URL}
      SearchResult={SearchResult}
      HandleChange={HandleChange}
    />
  );
};

export default ApiCall;
