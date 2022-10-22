import React, { useState, useEffect } from "react";
import Head from "next/head";
import BetsyLogo from "../../src/components/common/BetsyLogo";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import PersonInfoComponent from "../../src/components/common/PersonInfoComponent";
import ImagesDisplay from "../../src/components/common/ImagesDisplay";
import jasperData from "../../src/imagesdata/jasper";
import charisseData from "../../src/imagesdata/charisseData";
import christyData from "../../src/imagesdata/christy";

interface modelProps {
  modelName: string;
}

const Modelpage = ({ modelName }: modelProps) => {
  const [model, setModel] = useState(jasperData);
  const [name, setName] = useState(model.name);

  useEffect(() => {
    if (modelName === "Jasper") {
      setModel(jasperData);
      setName(model.name);
    } else if (modelName === "Charisse") {
      setModel(charisseData);
      setName(model.name);
    } else if (modelName === "Christy") {
      setModel(christyData);
      setName(model.name);
    }
  }, [model.name, modelName]);
  console.log(model);

  return (
    <>
      <div className="global-container">
        <Head>
          <title>Image Chronicles Studios | {name}</title>
          <meta name="description" content="Images" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BetsyLogo />
        <HeaderComponent />
        <PersonInfoComponent name={name} />
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
