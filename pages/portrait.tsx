import React, { useState } from "react";
import BetsyLogo from "../src/components/common/BetsyLogo";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PortraitDisplay from "../src/components/common/PortraitDisplay";
import jasperData from "../src/imagesdata/jasper";
import charisseData from "../src/imagesdata/charisseData";
import christyData from "../src/imagesdata/christy";
import imageData from "../src/imagesdata/imagedata";

interface PortraitProps {
  setModelName: (modelName: string) => void;
}

const Portrait = ({ setModelName }: PortraitProps) => {
  return (
    <>
      <div className="global-container">
        <BetsyLogo />
        <HeaderComponent />
        {imageData.map((item) => {
          return (
            <>
              <PortraitDisplay
                name={item.name}
                img1={item.portraitImages[0].url}
                img2={item.portraitImages[1].url}
                img3={item.portraitImages[2].url}
                img4={item.portraitImages[3].url}
                link={item.link}
                func={() => setModelName(item.name)}
              />
            </>
          );
        })}
        {/* <PortraitDisplay
          name={jasperData.name}
          img1={jasperData.portraitImages[0].url}
          img2={jasperData.portraitImages[1].url}
          img3={jasperData.portraitImages[2].url}
          img4={jasperData.portraitImages[3].url}
          link={jasperData.link}
          func={() => setModelName("Jasper")}
        />
        <PortraitDisplay
          name={charisseData.name}
          img1={charisseData.portraitImages[0].url}
          img2={charisseData.portraitImages[1].url}
          img3={charisseData.portraitImages[2].url}
          img4={charisseData.portraitImages[3].url}
          link="/portrait/models"
          func={() => setModelName("Charisse")}
        />
        <PortraitDisplay
          name={christyData.name}
          img1={christyData.portraitImages[0].url}
          img2={christyData.portraitImages[1].url}
          img3={christyData.portraitImages[2].url}
          img4={christyData.portraitImages[3].url}
          link="/portrait/models"
          func={() => setModelName("Christy")}
        />
      */}

        <FooterComponent />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default Portrait;

{
  /* <PortraitDisplay
name="Jasper Ramos Barcena"
img1="https://lh3.googleusercontent.com/pw/AL9nZEWOhIbEpAh3-PFRi_FVuJBoUf591B6XbmikkwwI-5FMtSl2xxbCUhgmEwRaSioZGhZQE86dXXqYqNCn7i5CEhCwO0YwFEfsBCi5YDhjpwfRvB7NndYOELU_zYAoPKf0eaDaEQNMnRvYMo105qYvXHw=w852-h1280-no?authuser=0"
img2="https://lh3.googleusercontent.com/pw/AL9nZEWSUIZ48yHoeAgwCEWqTwJ2h87cME19gC6WVd3xK8gx7YnQmrpSVdBd1tyqBH7s3ep3EIAtCShE4K3x15T6RDg7jB0MpWZP0QuB2UzSMHDBcSThWx_6sns04oR_z50P4O4FoHvnD7Acjibd9crAWxQ=w1280-h852-no?authuser=0"
img3="https://lh3.googleusercontent.com/pw/AL9nZEUV2S3iX-_FDJkndY9kbnuKIXGv0xQIYkAwTR76T7vLlC-F9hcEEJK5qc16jPoNaj2s3YfPYaPhvVoG1vndTahKCvHzlYRB2tXpt6GCgmFg67M44MbWCt_J-T8SRw5zvMiAQ_3AyZDruLx4JJJz_mQ=w1280-h852-no?authuser=0"
img4="https://lh3.googleusercontent.com/pw/AL9nZEXXVrejZvvRUZ-CibOjnHIYHBnsDTFVnYeGYL1NjE7JTSE_f8bytueyHpSpPPWpWn6mJtCCr2v4o3a7lK_3D-ynA-o5DH2hCd7QO5MNDlsiV7kcd0P7wJkBTvNYfs5FOAT86Qz0Aw8h2w3Z8sncOVo=w1280-h852-no?authuser=0"
/> */
}

{
  /* <PortraitDisplay
name="Jasper Ramos Barcena"
img1="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
img2="https://images.unsplash.com/photo-1526449066878-320ea3ca7a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
img3="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80"
img4="https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
/> */
}
