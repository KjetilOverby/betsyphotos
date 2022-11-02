import React from "react";
import BetsyLogo from "../common/BetsyLogo";
import HeaderComponent from "../common/HeaderComponent";

interface ChildrenProps {
  children: JSX.Element;
}

const ImageHeader = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="start-container">{children}</div>

      <style jsx>{`
        .start-container {
          width: 100vw;
          height: 70vh;
          display: grid;
          justify-content: center;
          position: relative;
          padding-top: 8rem;
          background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
            url("https://lh3.googleusercontent.com/otLJcLBjaYh0H5RUkCqBA6Dgz8RJgLDca4rqyUlMIKcmfe2kbzkWm1f62dvbDoXzeV18vdviPXZv7sQW8N5fZIhCr65E48Fec1MSaEC7uykQRk5-MoX0895ENNmpAtaPbF8pZ3xnc7nXUlYSbQvFYDv8uvWotn7e79mmqGhOLUeeIHITmrtpJk_6dTzgQN9_XsGXvNb4Hu23SoDQlNDW3Uc6frhswTbQ2vKZZfJqY5K8Uonj6lr2d10vADBX2R5eRVBEKzAMS_zdkR_2N8tR5tAzYvIQaXIjdWwpO_bnAXrbDm_lGvoncdA4aFxz4w6s711tYW8OXUuf_ZLT-OOw0n_2rG02WRXW7iNLg9s2uNXavwtV_PCfcBdQAH7W6Q3_1RvY48GepaOlS8Mfjm7oDwy2QJUQy0tOhSF1aQAAHjjiGV6R47NcVh2ppX9-2tiL__HwncwiWZsPr3tMXXJ9wsArnFAQReDj00NI9_nEWkQZScnMNK-Qf19acHwIxMemNL713mY2AX6mY6-BbWPs4FpbtYNPjiY-pimF_tMzvqBe0LQbZDQ9vVUfgEHLWIPGqmDkFubwvfb0Zw6woWsBwryKvdVnGMWIfYRZUHlbqJkkwp6dN1OK8oODZrDPx5JOv1KoR6Suq2ZuKQkLP01PcyR1M5d2CgrZ3jqwz3vaG_XpQYAw3wXmC03UdB4ebHI0MAJws0BgdasFBQ6OEOfTCzwULL7DGK0k79LJ1LEuF-6VP_y4GRr9b1fZVd1IbIbN9EokwLzQXQiD6jAnEDA2oaI_N21yovjoBwHumhYPi6953Y7zU9NSsQMhdbVb5WT5g7Tl2pEE_Aqx-mgh12RaT9ZUSleuLeXzcdmsjOfQnhDyjream-p6RCD1jTRhhVRbYScPBGqVBxWhs_wzgyEZQNznh1mvW1jxTE-IJ9goWbem=w1121-h748-no?authuser=0");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
    </>
  );
};

export default ImageHeader;
