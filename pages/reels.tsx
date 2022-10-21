import React from "react";
import Link from "next/link";

const reels = () => {
  return (
    <>
      <div className="container">
        <Link href="https://www.facebook.com/reel/1265771204246860?s=single_unit"></Link>
      </div>
      <style jsx>
        {`
          .container {
            height: 50rem;
            width: 20rem;
          }
        `}
      </style>
    </>
  );
};

export default reels;
