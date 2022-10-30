import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import imageData from "../src/imagesdata/imagedata";
import natureData from "../src/imagesdata/natureData";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [modelName, setModelName] = useState("Jasper Ramos");
  const [data, setData] = useState(imageData);
  const [model, setModel] = useState(
    imageData.find((item) => item.name === modelName)
  );

  useEffect(() => {
    setModel(data.find((item) => item.name === modelName));
  }, [data, modelName]);

  useEffect(() => {
    if (router.pathname === "/portrait") {
      setData(imageData);
    } else if (router.pathname === "/nature") {
      setData(natureData);
    }
  }, [router.pathname]);

  return (
    <Component
      {...pageProps}
      modelName={modelName}
      setModelName={setModelName}
      model={model}
      setData={setData}
    />
  );
}

export default MyApp;
