// import React,{useState} from 'react';
import AnimatedPage from "../AnimatedPage";
import styles from "./Like.module.css";

const Like = () => {
  // const [likeData,setLikeData]=useState([]);
  const likeData = [];
  const noLikeComp = "Oops, you haven't liked any song yet!";
  const likeComp = "Data is here!";

  // console.log("from like: ",likeData)
  return (
    <AnimatedPage className={styles.bContainer}>
      <div className={styles.sContainer}>
        {likeData.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>{noLikeComp}</h3>
        ) : (
          <h3 style={{ textAlign: "center" }}>{likeComp}</h3>
        )}
      </div>
    </AnimatedPage>
  );
};

export default Like;
