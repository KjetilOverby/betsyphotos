import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BetsyLogo from "../src/components/common/BetsyLogo";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import ImageComponent from "../src/components/startpage/ImageComponent";
import styles from "../styles/Home.module.css";

const fbLogo = "/fbLogo.jpeg";
const instaLogo = "/instaLogo.png";
const twitterLogo = "/twitterLogo.png";
const linkedLogo = "/linkedLogo.png";

const Home: NextPage = () => {
  return (
    <div>
      <div className="global-container">
        <Head>
          <title>Image Chronicles Studios</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BetsyLogo color="darkgrey" />
        <HeaderComponent />

        <ImageComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
