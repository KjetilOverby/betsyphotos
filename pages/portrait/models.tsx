import React, { useState, useEffect } from "react";
import Head from "next/head";
import BetsyLogo from "../../src/components/common/BetsyLogo";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import PersonInfoComponent from "../../src/components/common/PersonInfoComponent";
import ImagesDisplay from "../../src/components/common/ImagesDisplay";

import imageData from "../../src/imagesdata/imagedata";

interface modelProps {
  model: {
    name: string;
    link: string;
    portraitImages?: { url: string; class: string }[];
    imageData?: { url: string; class: string }[];
  };
}
// interface DataProps {
//   name: string;
//   link: string;
//   portraitImages?: { url: string; class: string }[];
//   imageData?: { url: string; class: string }[];
// }

const Modelpage = ({ model }: modelProps) => {
  // const [model, setModel] = useState<DataProps>(
  //   imageData.find((item) => item.name === modelName)
  // );

  return (
    <>
      <div className="global-container">
        <Head>
          <title>Image Chronicles Studios | {model.name}</title>
          <meta name="description" content="Images" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BetsyLogo />
        <HeaderComponent />
        <PersonInfoComponent name={model} />
        <ImagesDisplay data={model} />
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

export default Modelpage;
