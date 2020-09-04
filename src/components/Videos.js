import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";

const Videos = () => {
  let [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=2000&playlistId=UUAuUUnT6oDeKwE6v1NGQxug&key=AIzaSyBWU0PnsPGSGrQ6T5K2uxv5Of4h3Hw5eFc`
      );
      let result = await response.data.items;
      setVideos(result);
    }
    fetchData();
  }, []);

  return (
    <Fade>
      <div className="videos-container">
        {/* <h1 className="videos-title">Videos</h1> */}
        {videos.map((el) => (
          <div key={el.id} className="videos">
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
    </Fade>
  );
};

export default Videos;
