import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LibraryContainer from "../LibraryContainer/LibraryContainer";
import { apiURL } from "../../App";
import localContext from "../../Context/localContext";
import { Helmet } from "react-helmet";
import AnimatedPage from "../AnimatedPage";

const Home = () => {
  const { loadingState } = useContext(localContext);
  const { setLoading } = loadingState;
  const [randomSong, setRandomSong] = useState([]);
  const [topHitSong, setTopHitSong] = useState([]);

  useEffect(() => {
    const getRandomData = () => {
      setLoading(true);
      // axios
      //   .get(`https://listenit-backend.vercel.app/randomSong`)
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
    <AnimatedPage style={{ padding: "1rem 2rem" }}>
      <Helmet>
        <title>Musixera | Home</title>
      </Helmet>
      <LibraryContainer data={randomSong} head="Randoms" />
      <LibraryContainer data={topHitSong} head="Top Hits" />
    </AnimatedPage>
  );
};

export default Home;
