import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import imageData from "../src/imagesdata/imagedata";

function MyApp({ Component, pageProps }: AppProps) {
  const [modelName, setModelName] = useState("Jasper");
  const [model, setModel] = useState(
    imageData.find((item) => item.name === modelName)
  );

  useEffect(() => {
    setModel(imageData.find((item) => item.name === modelName));
  }, [modelName]);
  return (
    <Component
      {...pageProps}
      modelName={modelName}
      setModelName={setModelName}
      model={model}
    />
  );
}

export default MyApp;
