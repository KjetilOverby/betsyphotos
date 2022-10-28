import React from "react";
import BetsyLogo from "../common/BetsyLogo";
import HeaderComponent from "../common/HeaderComponent";

interface ChildrenProps {
  children: JSX.Element;
}

const ImageHeader = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="start-container">{children}</div>

      <style jsx>{`
        .start-container {
          width: 100vw;
          height: 70vh;
          display: grid;
          justify-content: center;
          position: relative;
          padding-top: 8rem;
          background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
            url("https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
    </>
  );
};

export default ImageHeader;
