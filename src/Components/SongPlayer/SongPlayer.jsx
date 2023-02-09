import axios from "axios";
import React, { useContext,useState } from "react";
import localContext from "../../Context/localContext";
import styles from "./SongPlayer.module.css";


function SongPlayer(props) {
  
  const {song, like}=useContext(localContext);
  const [songForSongPlayer, setSongForSongPlayer]=song
  const [likedSongData,setLikedSongData]=like;
  const [likeBoolState,setLikeBoolState]=useState(false)

  let songName = songForSongPlayer.trackName;
  let artist = songForSongPlayer.artistName||songForSongPlayer.artist;
  let movie = songForSongPlayer.collectionName||songForSongPlayer.movieName;
  let img=songForSongPlayer.thumb||songForSongPlayer.artworkUrl100
  let imgSrc ="../assets/img/apple-music-note.jpg"
  let likeId=songForSongPlayer.id||songForSongPlayer.trackName

  const toogleLike=(songForSongPlayer, e)=>{
    // e.preventDefault();
    setLikeBoolState((x)=>!x)
    if(likeBoolState===false){
        let url= 'http://localhost:3005/likedSongs/'
        let p=axios.post(url,songForSongPlayer)
        p.then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
    }
  }

  return (
    <div className={styles.songPlayerCont}>
      <div className={styles.controlsCont}>
        
        <div className={styles.songName_HeartCont_n_audTag_Cont}>
          <div className={styles.songName_HeartCont}>
            <div className={styles.songNameCont}>
              <span className={styles.songNameClass}>
                {songName ? songName : "No Song Playing"}
              </span>
              <span className={styles.artist_n_Movie}>
                <span className={styles.artist}>
                  {artist ? artist : "Artist Name"}
                </span>
                &nbsp;<span className={styles.pipe}>|</span>&nbsp;
                <span className={styles.movie}>
                  {movie ? movie : "Movie Name"}
                </span>
              </span>
            </div>
            <span className={styles.heart} onClick={(e)=>toogleLike(songForSongPlayer, e)}>
            <i className={likeBoolState?"bi bi-heart-fill":"bi bi-heart"}></i>
            </span>
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

export default SongPlayer;
