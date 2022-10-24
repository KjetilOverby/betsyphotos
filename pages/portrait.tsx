import React, { useEffect, useState } from "react";
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
  const [openSearch, setOpenSearch] = useState(false);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const inputHandler = (e: any) => {
    setInput(e.target.value);
  };

  useEffect(
    () =>
      setSearchResult(imageData.filter((item) => item.name.includes(input))),
    [input]
  );

  const openSearchHandler = () => {
    setInput("");
    setOpenSearch(true);
  };

  return (
    <>
      {openSearch && (
        <SearchModal
          onChange={inputHandler}
          close={setOpenSearch}
          names={searchResult}
          setInput={setInput}
          setOpenSearch={setOpenSearch}
        />
      )}
      <div className="global-container">
        <BetsyLogo color="darkgrey" />
        <HeaderComponent />
        <p onClick={openSearchHandler} className="search-btn">
          Søk
        </p>
        {searchResult &&
          searchResult.map((item: any) => {
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
          @media only screen and (max-width: 756px) {
            .search-btn {
              margin-top: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Portrait;
