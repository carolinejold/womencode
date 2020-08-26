import React, { useState, useEffect } from "react";
import axios from "axios";

const TedTalks = () => {
  let [talks, setTalks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=1000&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyBWU0PnsPGSGrQ6T5K2uxv5Of4h3Hw5eFc`
      );
      let result = await response.data.items;
      setTalks(result);
    }
    fetchData();
  }, []);

  console.log(talks);
  return (
    <div>
      {talks.map((el) => (
        <p key={el.id}>{el.snippet.title}</p>
      ))}
    </div>
  );
};

export default TedTalks;
