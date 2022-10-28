import React from "react";
import Image from "next/image";
import Link from "next/link";

const nature =
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const portrait =
  "https://lh3.googleusercontent.com/pw/AL9nZEVol13oYrwxPLDjblYdzmnkuOI6RZbzY3HMgtviqr7Y753Z1xQ9Y7p_9VXaXYiuowTZYRJXVZ5rwDG6_kgMOnVb7XTwBlrTfmDc6ac2m3a4IrhvZOQM3leRE-TA95liP8_1oJRsqISWhvBefVI2gDxl=w720-h1080-no?authuser=0";

const conceptual =
  "https://images.unsplash.com/photo-1579639255174-c4dc7ae73c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";

const ImageComponent = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="img-container">
            <h1 className="img-header">NATURE</h1>
            <Image
              layout="responsive"
              height="20"
              width="15"
              objectFit="cover"
              loader={() => nature}
              src={nature}
              unoptimized={true}
              alt=""
            />
          </div>
          <Link href="/portrait">
            <div className="img-container">
              <h1 className="img-header">PORTRAIT</h1>
              <Image
                layout="responsive"
                height="20"
                width="15"
                objectFit="cover"
                loader={() => portrait}
                src={portrait}
                unoptimized={true}
                alt=""
              />
            </div>
          </Link>
          <div className="img-container">
            <h1 className="img-header">CONCEPTUAL</h1>
            <Image
              layout="responsive"
              height="20"
              width="15"
              objectFit="cover"
              loader={() => conceptual}
              src={conceptual}
              unoptimized={true}
              alt=""
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2rem;
            margin: -15% 18% 1rem 18%;
            width: 100%;
          }
          .img {
            width: 100%;
          }
          .img-container {
            position: relative;
            transition: 0.5s;
          }
          .img-container:hover {
            box-shadow: 10px 10px 20px gray;
            cursor: pointer;
          }
          .img-header {
            position: absolute;
            z-index: 100;
            bottom: 2rem;
            font-size: 2.2rem;
            background: white;
            width: 90%;
            padding: 0.5rem;
            opacity: 0.5;
            color: black;
          }
          .main-container {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 8rem;
          }

          @media only screen and (max-width: 2100px) {
            .container {
            }
          }
          @media only screen and (max-width: 2000px) {
            .container {
            }
          }
          @media only screen and (max-width: 756px) {
            .container {
              grid-template-columns: 1fr;
              margin: 0;
            }
            .main-container {
              flex-direction: column;
              margin-bottom: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ImageComponent;
