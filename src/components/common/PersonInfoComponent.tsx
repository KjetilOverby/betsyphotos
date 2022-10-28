import React from "react";
import Image from "next/image";

interface NameProps {
  name: {
    name: string;
    color: string;
  };
}

const PersonInfoComponent = ({ name }: NameProps) => {
  return (
    <>
      <div className="container">
        <h1 className="name">{name.name}</h1>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 5rem;
            background: var(--primary);
            width: 100vw;
          }
          .content-container {
            margin: 0 45rem;
            display: grid;
            grid-template-columns: 1fr 60%;
            overflow: hidden;
          }

          .name {
            font-family: "Cinzel", serif;
            font-size: 4rem;
            color: var(--text);
            margin-left: 2rem;
          }
          @media only screen and (max-width: 2100px) {
            .name {
              font-size: 3.5rem;
            }
          }
          @media only screen and (max-width: 756px) {
            .name {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default PersonInfoComponent;
