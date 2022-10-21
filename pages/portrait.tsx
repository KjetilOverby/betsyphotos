import React, { useState } from "react";
import BetsyLogo from "../src/components/common/BetsyLogo";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PortraitDisplay from "../src/components/common/PortraitDisplay";
import jasperData from "../src/imagesdata/jasper";
import charisseData from "../src/imagesdata/charisseData";

interface PortraitProps {
  setModelName: (modelName: string) => void;
}

const portrait = ({ setModelName }: PortraitProps) => {
  return (
    <>
      <div className="global-container">
        <BetsyLogo />
        <HeaderComponent />
        <PortraitDisplay
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
          name="Gemma Holter"
          img1="https://lh3.googleusercontent.com/pw/AL9nZEWq4b7rupnT9l8zf_HXgkW8aAxaupufdZodWsU420gPa8SaAmJRQj4GrMIl451sGuNxtQgj5Lm4sPFxl0IS5Eh6TDz9pd36fMaWx8XdNa2I5v1x_eUUwvc3k_wjCPyQDLCByeePq4yCQvnJjYa-blgm=w852-h1280-no?authuser=0"
          img2="https://lh3.googleusercontent.com/pw/AL9nZEUUjfvazktK788VGSgKEX_txCVByYXxBPX3Mo2MpNw1HsLb0D3HV8KxjbC-ODbbta9frSOW2JC57uYsjvy6obF5KLCS3mpaPe_t0kQ8s0pHTMHzJQeXFJvylYXlCwoqZkyyYJjEWs6_EiQ9_VbNxZWF=w1280-h852-no?authuser=0"
          img3="https://lh3.googleusercontent.com/pw/AL9nZEVjR9UNvHCy8EHs78F49BGsRWrBLYr-k4YQzNUIrur7q20GFWiwdhTzSenFtnYDtorq0yC8iYr3KmYuT7eBxla3JsIOnXBiLT0uWHn-OjF3v10UkKfAttFQC6sgee4hfdDqFmtTqedrb_niSN856YnS=w1280-h910-no?authuser=0"
          img4="https://lh3.googleusercontent.com/pw/AL9nZEUndXjW-lUMYsQt2Iq8OxnlDlkX79avEqlcwJwX9Jv8TCVd01cUqQq993CD1jbd6ccNH37opovlfEeejNCUaMddJtR-3GRLqmWpCf_MGjh7a64_hUER0OldsjQC4i8WJXHXopKLcUUTCoGKrKzd0y2U=w1280-h785-no?authuser=0"
        />
        <PortraitDisplay
          name="Jonas Enkerud"
          img1="https://lh3.googleusercontent.com/pw/AL9nZEVtPrk28v7BP5VZ6BVsWr2qXO3Iy31hzKvMRUXNORw30aMJ5TpHytxFslfDVduWu7IiHvvgza3pxC65gWX8uJ8BAImYcbHWNzi60HhyKgsrBHUiAkGPVUMSuglV3_4WML0wbbazV161X8fW7YnQAqUD=w853-h1280-no?authuser=0"
          img2="https://lh3.googleusercontent.com/pw/AL9nZEUpHizQXpY6TbkjwV2Lgg4_b6vgMdbKHwj3IkoCdtOb73CQwrfgciR4iBAB5Ja0yHTDCUBE_0mFAK-Hl5SHnDMq8Hb9ryiIFWlOPAIE5uT71dgPqAgTrxF6mW05zcIHF4KGYUh-oTbJIaNeixIaHSMu=w1280-h853-no?authuser=0"
          img3="https://lh3.googleusercontent.com/pw/AL9nZEWCKXFbMpWhP5FZBv9O-nb_fkTjJqhZ1OcN9BBFWO2xKgJgrv4qv2AZA9Dh9ZZNyMdp44YP2Q5DEGLGfRRJY5zFRbkXvXZPVD3SQYjbSYTECzXuIpCqxDpDQp8fSCHTtjDvk8_bvGNgCSzVI7zmKoYT=w1280-h853-no?authuser=0"
          img4="https://lh3.googleusercontent.com/pw/AL9nZEWbmUib-fMfiiA48sIrrfXc75ckQQfsaoV7ePY4X81So97tSGQqt4dVC2VQLYKkL91-br1VPdPM8lsUrBT_bh45dpNCCdiNwUEKREBwSb-rklH3dR_DzsGVJnHvIt9PDBHLDvhq14sUWdOd8pgou9pT=w1280-h843-no?authuser=0"
        />
        <PortraitDisplay
          name="Christy Thoresen"
          img1="https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          img2="https://images.unsplash.com/photo-1516007223491-7753f0689511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          img3="https://images.unsplash.com/photo-1533858602901-34c7b371015a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          img4="https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
        />
        <PortraitDisplay
          name="Angel Laraquel"
          img1="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
          img2="https://images.unsplash.com/photo-1531547629769-f2e504fe4521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          img3="https://images.unsplash.com/photo-1614098998786-3d27c7db586d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1379&q=80"
          img4="https://images.unsplash.com/photo-1511111928333-046ec1d3bef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        />

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

export default portrait;

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
