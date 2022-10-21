import React, { useState } from "react";
import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import useArrowKeys from "use-arrow-keys";
import { useSwipeable } from "react-swipeable";

interface SingleImgProps {
  imgUrl: string;
  setOpenSingleImg: (openSingleImg: boolean) => void;
  changeImg: () => void;
  changeImgBack: () => void;
}

const SingleImgDisplay = ({
  setOpenSingleImg,
  imgUrl,
  changeImg,
  changeImgBack,
}: SingleImgProps) => {
  const [color, setColor] = useState("black");

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      alert("working");
    }
  };

  const onRightKey = () => changeImg();
  const onLeftKey = () => changeImgBack();
  useArrowKeys({ onRightKey, onLeftKey });

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => changeImgBack(),
    onSwipedLeft: (eventData) => changeImg(),
  });

  return (
    <>
      <div {...handlers} onKeyPress={handleKeyPress} className="container">
        <p onClick={() => setOpenSingleImg(false)} className="closeBtn">
          CLOSE
        </p>
        {/* <div className="arrow-container">
          <div onClick={changeImgBack} className="">
            <SlArrowLeft />
          </div>
          <div onClick={changeImg} className="">
            <SlArrowRight />
          </div>
        </div> */}

        {/* <div
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
        ></div> */}
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
          .arrow-container {
            display: grid;
            z-index: 2001;
            position: absolute;
            top: 4rem;
            left: 2rem;
            width: 4rem;
            grid-template-columns: 1fr 1fr;
            color: #fff;
          }
          .container {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: black;
            top: 0;
            left: 0;
            z-index: 1000;
          }
          .img-container {
            height: 100vh;
            animation: rollIn 1s;
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
          @-webkit-keyframes rollIn {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-100%, 0, 0)
                rotate3d(0, 0, 1, -120deg);
              transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
            }
            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default SingleImgDisplay;
