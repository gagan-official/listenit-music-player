import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import SongComp from '../SongComp/SongComp';
import styles from "./Search.module.css";
import LibraryContainer from "../LibraryContainer/LibraryContainer";
import localContext from "../../Context/localContext";
import { Helmet } from "react-helmet";
import AnimatedPage from "../AnimatedPage";

const Search = () => {
  const { loadingState } = useContext(localContext);
  const { setLoading } = loadingState;
  const [songData, setSongData] = useState([]);
  const location = useLocation();
  const val = location.state.inputVal;
  // const resultSuccessJsx=<p>results:&nbsp;{songData.length}</p>
  // const resultJsx=<p>Sorry, can't able to find your search request `{val}` :(</p>

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      let url = `https://itunes.apple.com/search?term=${val}&media=music&entity=song&limit=12&country=in`;
      let p = axios.get(url);
      p.then((res) => {
        setSongData(res.data.results);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    };
    getData();
  }, [val, setLoading]);

  // console.log("from search state",songData)

  return (
    <>
      <AnimatedPage className={styles.bContainer}>
        <Helmet>
          <title>Musixera | Results for: "{val}" </title>
        </Helmet>
        <LibraryContainer
          data={songData}
          head={`${songData.length} songs found`}
          noSideButtons
          libContClassName={styles.libContClassName}
        />
        {/* <div className={styles.sContainer}>
                    <h3 className={styles.result}>{songData.length>0?resultSuccessJsx:resultJsx}</h3>
                <div className={styles.sContainer2}>
                    {songData.map((i)=><SongComp key={i.trackId} song={i}/>)}
                </div>
            </div> */}
      </AnimatedPage>
    </>
  );
};

export default Search;
