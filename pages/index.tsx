import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BetsyLogo from "../src/components/common/BetsyLogo";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import ImageComponent from "../src/components/startpage/ImageComponent";
import ImageHeader from "../src/components/startpage/ImageHeader";
import StartPageSection from "../src/components/startpage/StartPageSection";
import styles from "../styles/Home.module.css";

const fbLogo = "/fbLogo.jpeg";
const instaLogo = "/instaLogo.png";
const twitterLogo = "/twitterLogo.png";
const linkedLogo = "/linkedLogo.png";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Image Chronicles Studios</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="global-container">
          <BetsyLogo color="grey" />

          <HeaderComponent />
        </div>
        <ImageHeader>
          <div className={styles.textContainer}>
            <h1 className={styles.header}>Betsy Photography</h1>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              dolores accusamus laborum. Tempore natus ullam necessitatibus
              nesciunt facere sunt, numquam praesentium quisquam eum temporibus
              tenetur reiciendis facilis illo qui! Cum?
            </p>
          </div>
        </ImageHeader>
        <ImageComponent />
      </div>
      <StartPageSection />
      <FooterComponent />
    </div>
  );
};

export default Home;
