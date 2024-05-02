import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styles from "./OurTeam.module.css";
import { apiURL } from "../../App";
import localContext from "../../Context/localContext";

const OurTeam = (props) => {
  const { loadingState } = useContext(localContext);
  const { loading, setLoading } = loadingState;
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const getTeamData = () => {
      setLoading(true);
      axios
        .get(`${apiURL}/team`)
        .then((res) => {
          setTeamList(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTeamData();
  }, [setLoading]);

  // console.log(teamList);
  return (
    <div className={styles.ourTeamCont} style={{ ...props.contStyle }}>
      {!loading ? (
        teamList.map((list) => (
          <div key={list.id} className={styles.ourTeamCard}>
            <div className={styles.content}>
              <span>
                <strong>Name:</strong> {list.name}
              </span>
              <span>
                <strong>Course:</strong> {list.course}
              </span>
              <span>
                <strong>Roll No:</strong> {list.rollNumber}
              </span>
              <span>
                <strong>Role in Project:</strong> {list.role}
              </span>
            </div>
            <img
              className={styles.ourTeamCardImg}
              src={list.url}
              alt="Team Pictures"
            />
          </div>
        ))
      ) : (
        <OurTeamLoader />
      )}
    </div>
  );
};

export const OurTeamLoader = () => {
  const multiLoaders = [1, 2, 3, 4];
  return multiLoaders.map((items) => (
    <div key={items} className={styles.ourTeamCard}>
      <div className={`${styles.content} ${styles.loadingContent}`}>
        {multiLoaders.map((items) => (
          <span key={items} className="loader" />
        ))}
      </div>
      <div
        className={`${styles.ourTeamCardImg} loader ${styles.ourTeamCardImgLoader}`}
      />
    </div>
  ));
};

export default OurTeam;
