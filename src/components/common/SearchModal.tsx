import React from "react";

interface DataProps {
  names: string[];
}

function SearchModal({ names }: DataProps) {
  return (
    <>
      <div className="container">
        <h4 className="header">Search</h4>
        <input className="mt" type="text" />
        <div className="names-container">
          <p className="names">{names}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            top: 0rem;
            left: 0rem;
            width: 20rem;
            height: 20rem;
            background: var(--primary);
            z-index: 5000;
            padding: 1rem;
          }
          .header {
            color: var(--text);
            font-weight: 300;
          }
          .names {
            color: var(--text);
          }
          .names-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            background: green;
            height: 10rem;
          }
        `}
      </style>
    </>
  );
}

export default SearchModal;
