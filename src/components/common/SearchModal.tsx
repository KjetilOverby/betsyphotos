import React from "react";
import Image from "next/image";

interface DataProps {
  names: {
    name: string;
    link: string;
    portraitImages: { url: string; class: string }[];
    imageData: { url: string; class: string }[];
    color: string;
  }[];
  close: (value: boolean) => void;
  onChange: (e: any) => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchModal({
  names,
  close,
  onChange,
  setInput,
  setOpenSearch,
}: DataProps) {
  return (
    <>
      <div className="container">
        <p onClick={() => close(false)} className="close">
          Close
        </p>

        <input
          onChange={onChange}
          style={{
            borderRadius: "5px",
            outline: "none",
            border: "none",
            background: "var(--text",
            padding: ".3rem",
            fontSize: "1rem",
            color: "#fff",
          }}
          className="input mt"
          type="search"
          placeholder="search..."
        />
        <div className="names-container mt">
          {names.map((item: any) => {
            const pickPerson = () => {
              setInput(item.name);
              setOpenSearch(false);
            };
            return (
              <>
                <div onClick={pickPerson} className="name-img-container">
                  <div className="circle">
                    <div className="image-container">
                      <Image
                        layout="responsive"
                        objectFit="cover"
                        width="10"
                        height="10"
                        loader={() => item.imageData[0].url}
                        src={item.imageData[0].url}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="names">{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            top: 0rem;
            left: 0rem;
            width: 20rem;
            height: auto;
            background: var(--background);
            z-index: 5000;
            padding: 1rem;
            padding: 2rem;
            border-bottom-right-radius: 10px;
          }
          .close {
            color: var(--text);
            margin-top: 0.5rem;
          }
          .close:hover {
            cursor: pointer;
          }
          .circle {
            background: var(--primary);
            border-radius: 50%;
            z-index: 50000;
            height: 3rem;
            width: 3rem;
            overflow: hidden;
            display: grid;
            place-items: center;
          }
          .header {
            color: var(--text);
            font-weight: 300;
          }
          .image-container {
            width: 3rem;
          }
          .name-img-container {
            display: grid;
            grid-template-columns: 4rem 1fr;
            align-items: center;
            margin-bottom: 1rem;
            transition: 0.3s;
          }
          .name-img-container:hover {
            cursor: pointer;
            background: grey;
            border-radius: 50px;
          }
          .names {
            color: var(--text);
            font-weight: 300;
            font-size: 1.2rem;
          }
          .names-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            height: auto;
          }

          @media only screen and (max-width: 756px) {
            .cokntainer {
              width: 100vw;
            }
          }
        `}
      </style>
    </>
  );
}

export default SearchModal;
