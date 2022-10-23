import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
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
          </div>
          <div>
            <h1 className="header">Image Chronicles Studios</h1>
            <h1 className="header">By Betsy Photography</h1>
            <p className="header">2270 Flisa, Norway</p>
            <p className="header">E-mail: betsyvianca@hotmail.com</p>
            <p className="header">Follow me at Facebook and Instagram:</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: rgb(30, 30, 30);
            padding: 0;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 5rem 1fr;
            width: 100vw;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .header {
            font-weight: 300;
            font-size: 0.8rem;
            color: #999;
          }
          .icon-container {
            width: 4rem;
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
            margin: 0 48rem;
            text-align: center;
          }
          @media only screen and (max-width: 756px) {
            .container {
              width: 100vw;
            }
            .text-container {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
