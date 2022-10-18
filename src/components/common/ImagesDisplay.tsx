import React from "react";
import Image from "next/image";
const jasper =
  "https://lh3.googleusercontent.com/pw/AL9nZEWOhIbEpAh3-PFRi_FVuJBoUf591B6XbmikkwwI-5FMtSl2xxbCUhgmEwRaSioZGhZQE86dXXqYqNCn7i5CEhCwO0YwFEfsBCi5YDhjpwfRvB7NndYOELU_zYAoPKf0eaDaEQNMnRvYMo105qYvXHw=w852-h1280-no?authuser=0";
const jasper3 =
  "https://lh3.googleusercontent.com/pw/AL9nZEWvadhXKIOci-p4vUxlxS6ZAw3p93NmlBvcjWqEWp2NotxzyiHL5l5-W570c1Nx4nUfVoU7LCYscEejNoSEqM_UFFnrPKesszuyHuJ6LEP7RGD-XMoqmrAs3Xg5ufVBgfjAgGDNnIfHWCjCh-6P4V0=w1280-h853-no?authuser=0";
const jasper2 =
  "https://lh3.googleusercontent.com/pw/AL9nZEWSUIZ48yHoeAgwCEWqTwJ2h87cME19gC6WVd3xK8gx7YnQmrpSVdBd1tyqBH7s3ep3EIAtCShE4K3x15T6RDg7jB0MpWZP0QuB2UzSMHDBcSThWx_6sns04oR_z50P4O4FoHvnD7Acjibd9crAWxQ=w1280-h852-no?authuser=0";
const jasper4 =
  "https://lh3.googleusercontent.com/pw/AL9nZEUV2S3iX-_FDJkndY9kbnuKIXGv0xQIYkAwTR76T7vLlC-F9hcEEJK5qc16jPoNaj2s3YfPYaPhvVoG1vndTahKCvHzlYRB2tXpt6GCgmFg67M44MbWCt_J-T8SRw5zvMiAQ_3AyZDruLx4JJJz_mQ=w1280-h852-no?authuser=0";
const jasper5 =
  "https://lh3.googleusercontent.com/pw/AL9nZEUjCgEfKLnRPOwAsgOBApoSwjTxpeDlKUFH4e06MuBcrXi5r-VBp2ZP9xkLHbB2qVdBvpgm3yV5yng7_Qc1FHR-zIJJ_rXRq24MJSO84xJu-slx-YxLaCNecGqH5nLtFoRBT_41R0YLdRjFKjWH6ZU=w853-h1280-no?authuser=0";
const jasper7 =
  "https://lh3.googleusercontent.com/pw/AL9nZEXyGwSMKvZQ0nLBpsP_oWv-phi7QbkBcKWr0tpaWoxjAa1AS0erbnZu7-9bqqsJIcmqwjvkGoINNNViQt72SeUmKCBdHaxGpXOM4fqOglETCy0B-_Vx_-QMudzR5_RdrdxBiQvL1SvC8ucFHvMIskY=w1280-h853-no?authuser=0";

const ImagesDisplay = () => {
  return (
    <>
      <div className="container">
        <div className="img-container img1">
          <Image
            layout="fill"
            src={jasper3}
            alt="personimage"
            loader={() => jasper3}
            objectFit="cover"
          />
        </div>
        <div className="img-container img2">
          <Image
            layout="fill"
            src={jasper}
            alt="personimage"
            loader={() => jasper}
            objectFit="cover"
          />
        </div>
        <div className="img-container img3">
          <Image
            layout="fill"
            src={jasper2}
            alt="personimage"
            loader={() => jasper2}
            objectFit="cover"
          />
        </div>
        <div className="img-container img4">
          <Image
            layout="fill"
            src={jasper3}
            alt="personimage"
            loader={() => jasper3}
            objectFit="cover"
          />
        </div>
        <div className="img-container img5">
          <Image
            layout="fill"
            src={jasper4}
            alt="personimage"
            loader={() => jasper4}
            objectFit="cover"
          />
        </div>
        <div className="img-container img6">
          <Image
            layout="fill"
            src={jasper5}
            alt="personimage"
            loader={() => jasper5}
            objectFit="cover"
          />
        </div>
        <div className="img-container img7">
          <Image
            layout="fill"
            src={jasper7}
            alt="personimage"
            loader={() => jasper7}
            objectFit="cover"
          />
        </div>
        <div className="img-container img8">
          <Image
            layout="fill"
            src={jasper3}
            alt="personimage"
            loader={() => jasper3}
            objectFit="cover"
          />
        </div>
        <div className="img-container img9">
          <Image
            layout="fill"
            src={jasper7}
            alt="personimage"
            loader={() => jasper7}
            objectFit="cover"
          />
        </div>
        <div className="img-container img10">
          <Image
            layout="fill"
            src={jasper}
            alt="personimage"
            loader={() => jasper}
            objectFit="cover"
          />
        </div>
        <div className="img-container img11">
          <Image
            layout="fill"
            src={jasper7}
            alt="personimage"
            loader={() => jasper7}
            objectFit="cover"
          />
        </div>
        <div className="img-container img12">
          <Image
            layout="fill"
            src={jasper7}
            alt="personimage"
            loader={() => jasper7}
            objectFit="cover"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            width: 100vw;
            grid-template-columns: 17% 18% 1fr 18% 18%;
            grid-template-rows: 20% 20% 20% 20% 20%;
            height: 120vh;
            grid-template-areas:
              "img1 img2 img3 img5 img5"
              "img4 img4 img3 img5 img5"
              "img4 img4 img3 img6 img7"
              "img9 img9 img10 img6 img8"
              "img9 img9 img10 img6 img12";
            grid-gap: 1rem;
            padding: 1rem 10rem;
          }
          .img-container {
            position: relative;
          }
          .img1 {
            grid-area: img1;
          }
          .img2 {
            grid-area: img2;
          }
          .img3 {
            grid-area: img3;
          }
          .img4 {
            grid-area: img4;
          }
          .img5 {
            grid-area: img5;
          }
          .img6 {
            grid-area: img6;
          }
          .img7 {
            grid-area: img7;
          }
          .img8 {
            grid-area: img8;
          }
          .img9 {
            grid-area: img9;
          }
          .img10 {
            grid-area: img10;
          }
          .img11 {
            grid-area: img11;
          }
          .img12 {
            grid-area: img12;
          }
        `}
      </style>
    </>
  );
};

export default ImagesDisplay;
