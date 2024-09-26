import React from "react";
import HomeBanners from "./home-banner";
import Industry from "./industry";
import Callback from "./call-back";
import Trending from "./trending";
import Comparison from "./comparison";
import Listed from "./listed";
import Awards from "./awards";
import Video from "./video";
import Scoring from "./scoring";
import Benefit from "./benefit";
import Test from './test';
import styles from "./home.module.scss"

const Home = () => {
  
  return (
    <>
    <HomeBanners styles={styles}/>
    {/* <Industry styles={styles}/> */}
    {/* <Callback styles={styles}/> */}
    <Trending styles={styles}/>
    <Comparison styles={styles}/>
    {/* <Test /> */}
    <Listed styles={styles}/>
    <Awards styles={styles}/>
    <Video styles={styles}/>
    <Scoring styles={styles}/>
    <Benefit styles={styles}/>
    </>
  );
};

export default Home;
