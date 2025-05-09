import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { RiCopyrightLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.topCont}>
        <div className={styles.leftCont}>
          <h3>Musixera</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            reprehenderit a eum at similique. Itaque dignissimos aut nihil iusto
            repudiandae, repellendus magnam, dolore fuga, nobis nesciunt eos
            quaerat labore ut.
          </p>
        </div>
        {footData.map((arr, index) => (
          <div key={index} className={styles.linksCont}>
            {arr.map((item, i) =>
              item.heading ? (
                <h6 key={i}>{item.heading}</h6>
              ) : (
                <Link key={i} className={styles.urls}>
                  {item.item}
                </Link>
              )
            )}
          </div>
        ))}
      </div>
      <div className={styles.bottomCont}>
        <RiCopyrightLine /> Musixera. All Rights reserved.
      </div>
    </footer>
  );
};

const footData = [
  [
    {
      heading: "Links",
    },
    {
      item: "Home",
    },
    {
      item: "Get Started",
    },
    {
      item: "Services",
    },
    {
      item: "Portfolio",
    },
    {
      item: "Corporate",
    },
  ],
  [
    {
      heading: "Others",
    },
    {
      item: "Terms of Services",
    },
    {
      item: "Privacy Policy",
    },
    {
      item: "Something goes here",
    },
    {
      item: "Portfolio",
    },
    {
      item: "Corporate",
    },
  ],
  [
    {
      heading: "Others",
    },
    {
      item: "Terms of Services",
    },
    {
      item: "Privacy Policy",
    },
    {
      item: "Something goes here",
    },
    {
      item: "Portfolio",
    },
    {
      item: "Corporate",
    },
  ],
];

export default Footer;
