import React, { useState, useEffect } from "react";
import axios from "axios";

const TedTalks = () => {
  let [talks, setTalks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=2000&playlistId=UUAuUUnT6oDeKwE6v1NGQxug&key=AIzaSyBWU0PnsPGSGrQ6T5K2uxv5Of4h3Hw5eFc`
      );
      let result = await response.data.items;
      setTalks(result);
    }
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {talks.map((el) => (
        <div key={el.id} className="card">
          <a
            href={`https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src={el.snippet.thumbnails.high.url}
                alt="ted talk"
                width="300"
                height="220"
              ></img>
              <h4>{el.snippet.title}</h4>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default TedTalks;
