import React from "react";
import Head from "next/head";
import BetsyLogo from "../../src/components/common/BetsyLogo";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import PersonInfoComponent from "../../src/components/common/PersonInfoComponent";
import ImagesDisplay from "../../src/components/common/ImagesDisplay";
import jasperData from "../../src/imagesdata/jasper";

const jasper = () => {
  return (
    <>
      <div className="global-container">
        <Head>
          <title>Image Chronicles Studios | Jasper</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BetsyLogo />
        <HeaderComponent />
        <PersonInfoComponent />
        <ImagesDisplay data={jasperData} />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default jasper;
