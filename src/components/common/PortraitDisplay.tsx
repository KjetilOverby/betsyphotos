import React, { useState } from "react";
import Image from "next/image";
import Hidden from "./Hidden";
import Link from "next/link";
import ChroniclesMark from "./ChroniclesMark";

interface ImgProps {
  name: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  link?: string;
  func?: () => void;
}

const PortraitDisplay = ({
  name,
  img1,
  img2,
  img3,
  img4,
  link,
  func,
}: ImgProps) => {
  return (
    <>
      <div className="container">
        <h1 className="header">{name}</h1>
        <Hidden size="small-down">
          <div className="img1">
            <Image
              layout="intrinsic"
              height="1020"
              width="700"
              objectFit="fill"
              loader={() => img1}
              src={img1}
              unoptimized={true}
              alt=""
            />
          </div>
        </Hidden>
        <div className="img2">
          <Image
            layout="responsive"
            height="49"
            width="70"
            objectFit="cover"
            loader={() => img2}
            src={img2}
            unoptimized={true}
            alt=""
          />
        </div>
        <div className="img3">
          <Image
            layout="responsive"
            height="49"
            width="70"
            objectFit="cover"
            loader={() => img3}
            src={img3}
            unoptimized={true}
            alt=""
          />
        </div>
        <div className="img4">
          <Image
            layout="responsive"
            height="49"
            width="70"
            objectFit="cover"
            loader={() => img4}
            src={img4}
            unoptimized={true}
            alt=""
          />
          {link && (
            <Link href={`${link}`}>
              <p onClick={func} className="link">
                <ChroniclesMark />
              </p>
            </Link>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 30rem 30rem;
            grid-template-rows: 3.5rem 20rem 1fr;
            grid-template-areas:
              "head head head"
              "img1 img2 img3"
              "img1 img4 img4";
            grid-gap: 0.5rem;
            margin-top: 7rem;
            margin-bottom: 5rem;
            overflow: hidden;
          }
          .header {
            grid-area: head;
            font-family: "Cinzel", serif;
            font-size: 3.5rem;
            color: grey;
          }
          .img1 {
            grid-area: img1;
            overflow: hidden;
          }
          .img2 {
            grid-area: img2;
            overflow: hidden;
          }
          .img3 {
            grid-area: img3;
            overflow: hidden;
          }
          .img4 {
            grid-area: img4;
            overflow: hidden;
            position: relative;
          }
          .link {
            position: absolute;
            bottom: 1.5rem;
            color: #fff;
            right: 1rem;
          }
          .link:hover {
            cursor: pointer;
          }

          @media only screen and (max-width: 2000px) {
            .container {
              width: 60%;
              grid-template-columns: 1fr 20.6rem 20.6rem;
              grid-template-rows: 1.8rem 14rem 1fr;
              height: 47rem;
            }
            .header {
              font-size: 2rem;
            }
            .link {
            }
          }
          @media only screen and (max-width: 1778px) {
            .container {
              width: 60%;
              grid-template-columns: 30rem 1fr 1fr;
              grid-template-rows: 3rem 12rem 1fr;
              height: 40rem;
            }
          }
          @media only screen and (max-width: 1704px) {
            .container {
              width: 60%;
              grid-template-columns: 26rem 1fr 1fr;
              grid-template-rows: 3rem 12rem 1fr;
              height: 40rem;
            }
          }
          @media only screen and (max-width: 1598px) {
            .container {
              width: 60%;
              grid-template-columns: 1fr 15rem 15rem;
              grid-template-rows: 3rem 12rem 1fr;
              height: 40rem;
            }
          }
          @media only screen and (max-width: 756px) {
            .container {
              width: 100vw;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 3.5% 22% 1fr;

              grid-template-areas:
                "head head"
                "img2 img3"
                "img4 img4";
              margin-top: 0;
              margin-bottom: -5rem;
            }
            .header {
              font-size: 1.5rem;
              margin-left: 0.5rem;
            }
            .link {
              bottom: 12rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default PortraitDisplay;
