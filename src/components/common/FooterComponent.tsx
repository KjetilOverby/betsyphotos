import React from "react";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

const FooterComponent = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">Image Chronicles Studios</h1>
          <h1 className="header">By Betsy Photography</h1>
          <p className="sub-header">2270 Flisa, Norway</p>
        </div>
        <div className="icon-container">
          <GrFacebook style={{ fontSize: "2rem", color: "grey" }} />
          <GrInstagram style={{ fontSize: "2rem", color: "grey" }} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: lightgrey;
            padding: 8rem 0 8rem 30rem;
            display: grid;
            grid-template-columns: 15rem 1fr;
            width: 100vw;
            margin-top: 10rem;
          }
          .header {
            font-weight: 300;
            font-size: 1rem;
            font-style: italic;
          }
          .icon-container {
            width: 5rem;
            display: flex;
            justify-content: space-between;
          }
          .sub-header {
            font-size: 0.8rem;
            font-style: italic;
          }
          @media only screen and (max-width: 756px) {
            .container {
              padding: 2rem 0 2rem 0.5rem;
              width: 100vw;
              margin-top: 0rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
