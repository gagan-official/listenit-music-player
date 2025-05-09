import AnimatedPage from "../AnimatedPage";
import styles from "./404.module.css";

const PageNotFound = () => {
  return (
    <AnimatedPage className={styles.notFoundCont}>
      Page Not Found {":("}
    </AnimatedPage>
  );
};

export default PageNotFound;
