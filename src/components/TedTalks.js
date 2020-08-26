import React, { useState, useEffect } from "react";
import axios from "axios";

const TedTalks = () => {
  let [talks, setTalks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios(`https://swapi.dev/api/people/`);
      let result = await response.data.results;
      setTalks(result);
    }
    fetchData();
  }, []);

  console.log(talks);
  return (
    <div>
      {talks.map((el) => (
        <p key={el.created}>{el.name}</p>
      ))}
    </div>
  );
};

export default TedTalks;
