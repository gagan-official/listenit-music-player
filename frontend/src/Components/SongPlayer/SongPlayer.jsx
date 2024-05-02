// import axios from "axios";
import React, { useContext } from "react";
import localContext from "../../Context/localContext";
import styles from "./SongPlayer.module.css";


function SongPlayer() {
  // const {song, like}=useContext(localContext);
  const {song}=useContext(localContext);
  const { songForSongPlayer }=song;
  // const [likedSongData,setLikedSongData]=like;
  // const [likeBoolState,setLikeBoolState]=useState(false)

  let songName = songForSongPlayer.trackName;
  let artist = songForSongPlayer.artistName||songForSongPlayer.artist;
  let movie = songForSongPlayer.collectionName||songForSongPlayer.movieName;
  let img=songForSongPlayer.thumb||songForSongPlayer.artworkUrl100
  let imgSrc ="../assets/img/apple-music-note.jpg"
  // let likeBool=songForSongPlayer.likeBool


  // const toogleLike=(songForSongPlayer)=>{
  //   let likeId=songForSongPlayer.id||songForSongPlayer.trackName
  //   setLikeBoolState((x)=>!x)
      
  //     // console.log(songForSongPlayer)
  //   if(likeBoolState===false){
  //       console.log(likeBoolState," msg from tooglelike")
  //       // setLikedSongData([...likedSongData,songForSongPlayer])
  //   }
  //   else{
  //     console.log(likeBoolState," msg from tooglelike")
  //   }
  // }

  return (
    <div className={styles.songPlayerCont}>
      <div className={styles.controlsCont}>
        
        <div className={styles.songName_HeartCont_n_audTag_Cont}>
          <div className={styles.songName_HeartCont}>
            <div className={styles.songNameCont}>
              <div className={styles.songNameClass}>
                <MarqueeComp marq={songName}>{songName ? songName : "No Song Playing"}</MarqueeComp>
              </div>
              <div className={styles.artist_n_Movie}>
                <div className={styles.artist}>
                  <MarqueeComp marq={artist}>{artist ? artist : "Artist Name"}</MarqueeComp>
                </div>
                <span className={styles.pipe}>|</span>
                <div className={styles.movie}>
                  <MarqueeComp marq={movie}>{movie ? movie : "Movie Name"}</MarqueeComp>
                </div>
              </div>
            </div>
            {/* ------------- Commented out the WIDTH also of class .songNameCont at line no. 35 in SongPlayer.module.css ------------- */}
            {/* <span className={styles.heart} onClick={()=>toogleLike(songForSongPlayer)}>
            <i className={likeBoolState?"bi bi-heart-fill":"bi bi-heart"}></i>
            </span> */}
          </div>
          
          <audio
            className={styles.audioTag}
            src={songForSongPlayer.url || songForSongPlayer.previewUrl}
            controls
            autoPlay
          >
            audio not supported:(
          </audio>
        </div>

        <img className={styles.imgTag} src={img?img:imgSrc} alt="Song Thumbnail" />
      </div>
    </div>
  );
}

const MarqueeComp = (props) => {
  if (props.marq) {
    return (
      <div className={styles.runningText}>
        {props.children}
      </div>
    );
  } else {
      return props.children;
  } 
}

export default SongPlayer;
