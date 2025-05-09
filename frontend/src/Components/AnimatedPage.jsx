import { useContext } from "react";
import localContext from "../Context/localContext";
import { motion } from "framer-motion";

function AnimatedPage(props) {
  const { blurState } = useContext(localContext);
  const { blur } = blurState;
  const blurStyle = {
    filter: blur ? "blur(25px)" : "",
    pointerEvents: blur ? "none" : "",
    transition: ".5s",
  };

  const fadeIn = {
    initial: { opacity: 0, visibility: "hidden" },
    animate: { opacity: 1, visibility: "visible" },
    exit: { opacity: 0, visibility: "hidden" },
  };

  const slideIn = {
    initial: { opacity: 0, x: "5%" },
    animate: { opacity: 1, x: "0" },
    exit: { opacity: 0, x: "-5%" },
  };

  const slideUp = {
    initial: { opacity: 0, y: "5%" },
    animate: { opacity: 1, y: "0" },
    exit: { opacity: 0, y: "-5%" },
  };

  const slideInWidth = {
    initial: { width: 0 },
    animate: { width: "100%" },
    exit: { opacity: 0, x: window.innerWidth },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
      style={{
        ...blurStyle,
        ...props.style,
      }}
    >
      {props.children}
    </motion.div>
  );
}

export default AnimatedPage;
