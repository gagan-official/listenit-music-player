import axios from "axios";
import React, { useEffect, useState } from "react";
import LibraryContainer from "../LibraryContainer/LibraryContainer";
import { apiURL } from "../../App";

const Home = (props) => {
  const [randomSong, setRandomSong] = useState([]);
  const [topHitSong, setTopHitSong] = useState([]);

  const getRandomData = () => {
    axios
      .get(`${apiURL}/randomSong`)
      .then((res) => {
        setRandomSong(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getTopHitsData = () => {
    axios
      .get(`${apiURL}/topHitsSong`)
      .then((res) => {
        setTopHitSong(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getRandomData();
    getTopHitsData();
  }, []);

  return (
    <div
      style={{
        padding: "1rem 2rem",
        ...props.contStyle,
      }}
    >
      <LibraryContainer data={randomSong} head="Randoms" />
      <LibraryContainer data={topHitSong} head="Top Hits" />
    </div>
  );
};

export default Home;
