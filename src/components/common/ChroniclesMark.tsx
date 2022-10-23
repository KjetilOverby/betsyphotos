import React from "react";

const ChroniclesMark = () => {
  return (
    <>
      <div className="container">
        <h1 className="name">Image Chronicles Studios</h1>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
            right: 0rem;
            width: 18rem;
            padding: 0.3rem;
          }
          .name {
            font-family: "Great Vibes", cursive;
            font-size: 2rem;
            font-weight: 100;
          }
          .name-header {
            font-weight: 100;
            margin-bottom: 5rem;
            font-size: 1.2rem;
          }
          @media only screen and (max-width: 756px) {
            .name {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ChroniclesMark;
