import React from "react";
import Image from "next/image";

const camera =
  "https://www.pngkit.com/png/full/362-3628422_showreel-production-camera-with-girl-png.png";

const StartPageSection = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="header mb">Photo Gallery</h1>

          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            quos reiciendis dolore atque ut! Accusantium dolore maiores sunt
            nostrum optio tempore eveniet iure sint iste, quisquam minus magnam
            dicta delectus. Consequuntur consequatur dolorum aliquid, sed
            ducimus fugiat, aperiam odio harum nisi quibusdam dolorem rerum
            maxime, mollitia porro? Cum, quo, sequi voluptatum non ullam sunt
            dolorem doloremque consequuntur harum repudiandae suscipit.
            Laudantium non, hic corrupti debitis excepturi voluptatum placeat
            culpa provident aspernatur voluptas repellendus sed numquam iure
            tenetur incidunt obcaecati necessitatibus cum. Delectus, reiciendis
            at necessitatibus incidunt ducimus quisquam. Mollitia, quam?
          </p>
        </div>
        <div className="img-container">
          <Image
            layout="responsive"
            width="120"
            height="200"
            src={camera}
            loader={() => camera}
            objectFit="cover"
            alt="camera"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin: 10% 24% 0% 24%;
            display: grid;
            grid-template-columns: 50% 1fr;
            grid-gap: 5rem;
          }
          .header {
            font-weight: 100;
            color: dvar(--primary);
          }
          .img-container {
            position: relative;
            width: 100%;
          }
          .text {
            font-weight: 200;
            color: dvar(--primary);
          }
        `}
      </style>
    </>
  );
};

export default StartPageSection;
