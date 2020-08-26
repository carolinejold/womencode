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
        <a
          href={`https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}`}
        >
          <div>
            <p key={el.id}>{el.snippet.title}</p>
            <img
              src={el.snippet.thumbnails.default.url}
              alt="ted talk"
              width={el.snippet.thumbnails.default.width}
              height={el.snippet.thumbnails.default.height}
            ></img>
          </div>
        </a>
      ))}
      )}
    </div>
  );
};

export default TedTalks;
