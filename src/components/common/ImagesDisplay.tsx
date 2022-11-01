import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Url } from "url";
import SingleImgDisplay from "./SingleImgDisplay";
import FooterComponent from "./FooterComponent";

interface DataProps {
  data: {
    name?: string;
    link?: string;
    portraitImages: { url: string; class: string }[];
    imageData: { url: string; class: string }[];
  };
}

const ImagesDisplay = ({ data }: any) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [openSingleImg, setOpenSingleImg] = useState<boolean>(false);

  const imgUrls = data.imageData.map((item: any) => item.url);
  const [imgCount, setImgCount] = useState(0);

  const changeImg = () => {
    setImgCount(imgCount + 1);
  };
  const changeImgBack = () => {
    setImgCount(imgCount - 1);
  };

  useEffect(() => {
    setImgUrl(imgUrls[imgCount]);
  }, [imgCount, imgUrls]);

  useEffect(() => {
    if (imgCount >= 11) {
      setImgCount(0);
    } else if (imgCount < 0) {
      setImgCount(12);
    }
  }, [imgCount]);

  return (
    <>
      {openSingleImg && (
        <SingleImgDisplay
          changeImg={changeImg}
          changeImgBack={changeImgBack}
          imgUrl={imgUrl}
          setOpenSingleImg={setOpenSingleImg}
        />
      )}
      <div className="container">
        {data.imageData.map((item: any, index: number) => {
          const openSingleImgHandler = () => {
            setImgUrl(item.url);
            setOpenSingleImg(true);
            setImgCount(index);
          };

          return (
            <div
              onClick={openSingleImgHandler}
              key={item.url}
              className={`img-container ${item.class}`}
            >
              <Image
                layout="fill"
                src={item.url}
                alt="personimage"
                loader={() => item.url}
                objectFit="cover"
              />
            </div>
          );
        })}
        <FooterComponent />
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            width: 100vw;
            grid-template-columns: 17% 18% 1fr 18% 18%;
            grid-template-rows: 20% 20% 20% 20% 20%;
            height: 120vh;
            grid-template-areas:
              "img1 img2 img3 img5 img5"
              "img4 img4 img3 img5 img5"
              "img4 img4 img3 img6 img7"
              "img9 img9 img10 img6 img8"
              "img9 img9 img10 img6 img11";

            padding: 0.5rem 0;
            gap: 0.5rem;
          }
          .img-container {
            position: relative;
          }
          .img1 {
            grid-area: img1;
          }
          .img2 {
            grid-area: img2;
          }
          .img3 {
            grid-area: img3;
          }
          .img4 {
            grid-area: img4;
          }
          .img5 {
            grid-area: img5;
          }
          .img6 {
            grid-area: img6;
          }
          .img7 {
            grid-area: img7;
          }
          .img8 {
            grid-area: img8;
          }
          .img9 {
            grid-area: img9;
          }
          .img10 {
            grid-area: img10;
          }
          .img11 {
            grid-area: img11;
          }
          .img12 {
            grid-area: img12;
          }
          @media only screen and (max-width: 1400px) {
            .container {
              padding: 1rem 0.5rem;
            }
          }
          @media only screen and (max-width: 756px) {
            .container {
              padding: 0 0rem;
              grid-template-columns: 1fr;
              grid-template-rows: 20rem 20rem 40rem 20rem 40rem 20rem 20rem 20rem 20rem 20rem 20rem 25rem;
              height: auto;
              grid-template-areas:
                "img1"
                "img2 "
                "img3 "
                "img4 "
                "img5"
                "img6"
                "img7"
                "img8"
                "img9"
                "img10"
                "img11"
                "img12";
            }
          }
        `}
      </style>
    </>
  );
};

export default ImagesDisplay;
