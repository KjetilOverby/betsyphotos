import React, { useState } from "react";
import Image from "next/image";

interface SingleImgProps {
  imgUrl: string;
  setOpenSingleImg: (openSingleImg: boolean) => void;
}

const SingleImgDisplay = ({ setOpenSingleImg, imgUrl }: SingleImgProps) => {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="container">
        <p onClick={() => setOpenSingleImg(false)} className="closeBtn">
          CLOSE
        </p>
        <div
          onClick={() => setColor("white")}
          className="dot-btn dot-white"
        ></div>
        <div
          onClick={() => setColor("black")}
          className="dot-btn dot-black"
        ></div>
        <div
          onClick={() => setColor("grey")}
          className="dot-btn dot-grey"
        ></div>
        <div
          onClick={() => setColor("lightblue")}
          className="dot-btn dot-lightblue"
        ></div>
        <div className="img-container">
          <Image
            layout="fill"
            width="1100"
            height="650"
            src={imgUrl}
            alt="personimage"
            loader={() => imgUrl}
            objectFit="contain"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: ${color};
            top: 0;
            left: 0;
            z-index: 1000;
          }
          .img-container {
            height: 100vh;
          }
          .closeBtn {
            color: white;
            position: absolute;
            top: 2rem;
            left: 2rem;
            z-index: 2000;
          }
          .closeBtn:hover {
            cursor: pointer;
          }
          .dot-btn {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            z-index: 3000;
            position: absolute;
            left: 1rem;
          }
          .dot-white {
            background: white;
            top: 7rem;
          }
          .dot-black {
            background: black;
            top: 5rem;
          }
          .dot-grey {
            background: grey;
            top: 9rem;
          }
          .dot-lightblue {
            background: lightblue;
            top: 12rem;
          }
        `}
      </style>
    </>
  );
};

export default SingleImgDisplay;
