import React, { useContext, useRef } from "react";
import styles from "./LibraryContainer.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import SongComp, { SongCompLoader } from "../SongComp/SongComp";
import localContext from "../../Context/localContext";

function LibraryContainer(props) {
  const { loadingState } = useContext(localContext);
  const { loading } = loadingState;
  // For scrolling the Library Container by clicking on the Arrow button
  const libContRef = useRef();

  const scrollFunc = (scrollVal) => {
    libContRef.current.scrollLeft += scrollVal;
  };
  // console.log(props.data);
  return (
    <div className={styles.outerLibCont}>
      <span className={styles.heading} customtitle={props.head} />
      <div ref={libContRef} className={`${styles.libCont} ${props.libContClassName}`}>
        {!  loading ? (
          props.data.map((i) => <SongComp key={i.id} song={i} />)
        ) : (
          <SongCompLoader />
        )}
      </div>
      {!props.noSideButtons && (
        <>
          <span
            onClick={() => scrollFunc(-500)}
            className={`${styles.arrCont} ${styles.left}`}
          >
            <MdArrowForwardIos />
          </span>
          <span
            onClick={() => scrollFunc(500)}
            className={`${styles.arrCont} ${styles.right}`}
          >
            <MdArrowForwardIos />
          </span>
        </>
      )}
    </div>
  );
}

export default LibraryContainer;
