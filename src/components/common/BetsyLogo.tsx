import React from "react";

const BetsyLogo = () => {
  return (
    <>
      <div className="container">
        <h1 className="name">Image Chronicles Studios</h1>
        <h1 className="name-header">BY BETSY PHOTOGRAPHY</h1>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
          }
          .name {
            font-family: "Great Vibes", cursive;
            font-size: 3rem;
            font-weight: 100;
          }
          .name-header {
            font-weight: 100;
            margin-bottom: 5rem;
            font-size: 1.2rem;
          }
          @media only screen and (max-width: 756px) {
            .name {
              font-size: 2.3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default BetsyLogo;
