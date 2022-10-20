import React from "react";
import Image from "next/image";

const PersonInfoComponent = () => {
  const jasper2 =
    "https://lh3.googleusercontent.com/pw/AL9nZEVL3hZdZgNL2zeSV6HLQrzpELXcF_JML2p_QOWdWDtQjGIeFseYRWaTNI_scp7VpN-ckTeReg_IL8kurZg10Fes6aEQBQBp2bTwEHbtS0tDRxSRA3sJYhU0zTqKicT59jUxBv_cBRjvM9DtMrzMW6Cn=w5076-h3384-no?authuser=0";

  const jasper3 =
    "https://lh3.googleusercontent.com/pw/AL9nZEWvadhXKIOci-p4vUxlxS6ZAw3p93NmlBvcjWqEWp2NotxzyiHL5l5-W570c1Nx4nUfVoU7LCYscEejNoSEqM_UFFnrPKesszuyHuJ6LEP7RGD-XMoqmrAs3Xg5ufVBgfjAgGDNnIfHWCjCh-6P4V0=w1280-h853-no?authuser=0";
  return (
    <>
      {/* <div className="container">
        <div className="content-container content1">
          <div className="img-container">
            <Image
              layout="intrinsic"
              src={jasper2}
              alt="personimage"
              loader={() => jasper2}
              width="800"
              height="600"
              objectFit="cover"
            />
          </div>
          <div className="name-container">
            <h1 className="name name1">Jasper</h1>
            <h1 className="name name2">Ramos</h1>
            <h1 className="name name3">Barcena</h1>
          </div>
        </div>
        <div className="content-container content2">
          <div className="text-container">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              exercitationem deserunt corporis nobis minus, quidem officiis sint
              quia eligendi ratione, dolorum eveniet libero quisquam vero! Hic
              ea eaque velit voluptate!
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              adipisci recusandae doloribus iste tempore doloremque deleniti,
              placeat id, facilis, ducimus incidunt sunt quam velit! Aut cumque
              sunt error dolorum illo. Doloremque, mollitia qui! Modi rem illum
              tempora sequi dolor nesciunt unde autem eum odio in ea earum
              excepturi, esse aliquid asperiores ducimus, accusamus libero quas
              nisi. Obcaecati sint aliquid nobis.
            </p>
          </div>
          <div className="img-container">
            <Image
              layout="intrinsic"
              src={jasper3}
              alt="personimage"
              loader={() => jasper3}
              width="1000"
              height="700"
              objectFit="cover"
            />
          </div>
        </div>
      </div> */}

      <div className="container">
        <h1 className="name">Jasper Ramos Barcena</h1>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 5rem;
            background: rgb(118, 118, 118);
            width: 100vw;
          }
          .content-container {
            margin: 0 45rem;
            display: grid;
            grid-template-columns: 1fr 60%;
            overflow: hidden;
          }
          .content1 {
          }
          .content2 {
          }
          .img-container {
            margin-bottom: -1rem;
          }
          .name {
            font-family: "Cinzel", serif;
            font-size: 6rem;
            color: #fff;
            margin-left: 2rem;
          }
          .name2 {
            margin-left: 10rem;
          }
          .name3 {
            margin-left: 20rem;
          }
          .name-container {
            padding: 1rem;
          }
          .text {
            color: lightgrey;
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
          .text-container {
            padding: 1rem 1rem 0 0;
          }
          @media only screen and (max-width: 2100px) {
            .content-container {
              margin: 0 40rem;
            }
          }
          @media only screen and (max-width: 2000px) {
            .content-container {
              margin: 0 15rem;
            }
          }
          @media only screen and (max-width: 1500px) {
            .content-container {
              margin: 0 2rem;
            }
          }

          @media only screen and (max-width: 1000px) {
            .content-container {
              margin: 0 0.5rem;
              display: grid;
              grid-template-columns: 1fr;
              overflow: hidden;
            }
            .img-container {
              width: 100vw;
            }
            .name {
              font-family: "Cinzel", serif;
              font-size: 3rem;
              color: #fff;
            }
            .name2 {
              margin-left: 4rem;
            }
            .name3 {
              margin-left: 8rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default PersonInfoComponent;
