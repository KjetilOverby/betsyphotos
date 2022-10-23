import React, { useState } from "react";
import BetsyLogo from "../src/components/common/BetsyLogo";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PortraitDisplay from "../src/components/common/PortraitDisplay";
import jasperData from "../src/imagesdata/jasper";
import charisseData from "../src/imagesdata/charisseData";
import christyData from "../src/imagesdata/christy";
import imageData from "../src/imagesdata/imagedata";
import SearchModal from "../src/components/common/SearchModal";

interface PortraitProps {
  setModelName: (modelName: string) => void;
}

const Portrait = ({ setModelName }: PortraitProps) => {
  const [names, setNames] = useState<string[]>(
    imageData.map((item) => item.name)
  );
  return (
    <>
      {/* <SearchModal names={names} /> */}
      <div className="global-container">
        <BetsyLogo color="darkgrey" />
        <HeaderComponent />
        <p className="search-btn">Søk</p>
        {imageData.map((item) => {
          return (
            <>
              <PortraitDisplay
                name={item.name}
                img1={item.portraitImages[0].url}
                img2={item.portraitImages[1].url}
                img3={item.portraitImages[2].url}
                img4={item.portraitImages[3].url}
                link={item.link}
                func={() => setModelName(item.name)}
              />
            </>
          );
        })}

        <FooterComponent />
      </div>
      <style jsx>
        {`
          .container {
          }
          .search-btn {
            color: darkgrey;
            position: absolute;
            top: 1rem;
            left: 1rem;
          }
          .search-btn:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Portrait;
