import "../styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [modelName, setModelName] = useState("Charisse");

  return (
    <Component
      {...pageProps}
      modelName={modelName}
      setModelName={setModelName}
    />
  );
}

export default MyApp;
