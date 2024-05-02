import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LibraryContainer from "../LibraryContainer/LibraryContainer";
import { apiURL } from "../../App";
import localContext from "../../Context/localContext";

const Home = (props) => {
  const { loadingState } = useContext(localContext);
  const { setLoading } = loadingState;
  const [randomSong, setRandomSong] = useState([]);
  const [topHitSong, setTopHitSong] = useState([]);
  
  useEffect(() => {
    const getRandomData = () => {
      setLoading(true);
      axios
        .get(`${apiURL}/randomSong`)
        .then((res) => {
          setRandomSong(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getTopHitsData = () => {
      setLoading(true);
      axios
        .get(`${apiURL}/topHitsSong`)
        .then((res) => {
          setTopHitSong(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getRandomData();
    getTopHitsData();
  }, [setLoading]);

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
