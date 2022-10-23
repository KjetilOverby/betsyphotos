import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";

const HeaderComponent = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  const openSidebarHandler = () => {
    setHideSidebar(true);
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IoMenuSharp
            onClick={openSidebarHandler}
            className="drawerIcon"
            style={{
              fontSize: "2rem",
              position: "absolute",
              left: "1rem",
              top: "1rem",
            }}
          />
          {hideSidebar && (
            <div
              className={`sidebar-container ${
                openSidebar ? "sidebar-open" : "sidebar-close"
              }`}
            >
              <Link href="/">
                <p className="tabs-mobile">Home</p>
              </Link>
              <Link href="/portrait">
                <p className="tabs-mobile">Portrait</p>
              </Link>
              <Link href="/">
                <p className="tabs-mobile">nature</p>
              </Link>
              <Link href="/">
                <p className="tabs-mobile">Conceptual</p>
              </Link>
              <Link href="/">
                <p className="tabs-mobile">Contact</p>
              </Link>
              <Link href="/">
                <p className="tabs-mobile">About</p>
              </Link>
            </div>
          )}
          {openSidebar && (
            <div
              onClick={openSidebarHandler}
              style={{
                background: "rgba(256,256,256,.0)",
                height: "100vh",
                width: "100vw",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            ></div>
          )}
        </>
      ) : (
        <div className="container">
          <Link href="/">
            <p className="tab">Home</p>
          </Link>
          <p>•</p>
          <Link href="/portrait">
            <p className="tab">Portrait</p>
          </Link>
          <p>•</p>
          <p className="tab">Nature</p>
          <p>•</p>
          <p className="tab">Conseptual</p>
          <p>•</p>
          <p className="tab">Contact</p>
          <p>•</p>
          <p className="tab">About</p>
        </div>
      )}
      <style jsx>
        {`
          .container {
            display: flex;
            width: 40rem;
            justify-content: space-between;
          }
          .tab {
            font-weight: 300;
            transition: 0.2s;
            color: rgb(59, 59, 59);
          }
          .tab:hover {
            cursor: pointer;
            color: grey;
          }

          .sidebar-container {
            position: absolute;
            background-color: rgb(238, 238, 238);
            left: 0;
            width: 12rem;
            height: 80vh;
            top: 4rem;
            padding-left: 1rem;
            left: -10rem;
            z-index: 100;
            padding-top: 1rem;
          }
          .sidebar-open {
            animation: slide 0.3s forwards;
          }
          .sidebar-close {
            animation: slideClose 0.5s forwards;
          }
          .tabs-mobile {
            text-transform: uppercase;
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(10rem);
            }
          }
          @keyframes slideClose {
            0% {
              transform: translateX(10rem);
            }
            100% {
              transform: translateX(-10rem);
            }
          }

          @media only screen and (min-width: 2100px) {
            .container {
              margin: 5rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default HeaderComponent;
