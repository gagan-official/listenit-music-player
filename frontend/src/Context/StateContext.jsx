import React, { useState } from "react";
import localContext from "./localContext";

const StateContext = (props) => {
  const [songForSongPlayer, setSongForSongPlayer] = useState([]);
  const [likedSongData, setLikedSongData] = useState([]);
  const [blur, setBlur] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log("from likedSongData",songForSongPlayer)
  return (
    <localContext.Provider
      value={{
        song: { songForSongPlayer, setSongForSongPlayer },
        like: { likedSongData, setLikedSongData },
        blurState: { blur, setBlur },
        loadingState: { loading, setLoading },
      }}
    >
      {props.children}
    </localContext.Provider>
  );
};

export default StateContext;
