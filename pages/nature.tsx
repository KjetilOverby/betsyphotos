import React, { useState, useEffect } from "react";
import BetsyLogo from "../src/components/common/BetsyLogo";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PortraitDisplay from "../src/components/common/PortraitDisplay";
import SearchModal from "../src/components/common/SearchModal";
import natureData from "../src/imagesdata/natureData";

interface PortraitProps {
  setModelName: (modelName: string) => void;
}

const Nature = ({ setModelName }: PortraitProps) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const inputHandler = (e: any) => {
    setInput(e.target.value);
  };

  useEffect(
    () =>
      setSearchResult(natureData.filter((item) => item.name.includes(input))),
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
        <BetsyLogo color="var(--text)" />
        <HeaderComponent />
        <p onClick={openSearchHandler} className="search-btn">
          Search
        </p>

        {natureData &&
          natureData.map((item) => {
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

export default Nature;
