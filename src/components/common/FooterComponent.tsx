import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import BetsyLogo from "./BetsyLogo";

const FooterComponent = () => {
  return (
    <>
      <div className="container">
        <div className="logo-container">
          <BetsyLogo color="grey" />
        </div>
        <div className="text-container">
          <div className="icon-container">
            <FaFacebookSquare style={{ fontSize: "1.5rem", color: "#fff" }} />
            <GrInstagram style={{ fontSize: "1.5rem", color: "#fff" }} />
            <BsTwitter style={{ fontSize: "1.5rem", color: "#fff" }} />
          </div>
          <div>
            <h1 className="header">Image Chronicles Studios</h1>
            <h1 className="header">By Betsy Photography</h1>
            <p className="header">2270 Flisa, Norway</p>
            <p className="header">E-mail: betsyvianca@hotmail.com</p>
            <p className="header">Phone: +47 911 94 405 </p>
            <p className="header mt">
              Copyright © 2022 Betsy Photography. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: var(--primary);
            padding: 0;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 5rem 1fr;
            width: 100vw;
            padding-top: 3rem;
            padding-bottom: 5rem;
          }
          .header {
            font-weight: 300;
            font-size: 0.8rem;
            color: #999;
          }
          .icon-container {
            width: 10rem;
            display: flex;
            justify-content: space-between;
            padding-bottom: 2rem;
          }
          .logo-container {
          }
          .sub-header {
            font-size: 0.8rem;
            font-style: italic;
          }
          .text-container {
            display: grid;
            place-items: center;
            padding-top: 1.5rem;
            grid-template-columns: 1fr;

            text-align: center;
          }
          @media only screen and (max-width: 1000px) {
            .container {
              width: 100vw;
            }
            .text-container {
              margin: 0;
            }
          }
          @media only screen and (max-width: 756px) {
            .container {
            }
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
