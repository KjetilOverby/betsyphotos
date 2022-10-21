import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  children: JSX.Element | JSX.Element[];
  size: string;
};

const Hidden = ({ children, size }: Props) => {
  const small = useMediaQuery({ query: `(min-width: 756px)` });
  const medium = useMediaQuery({ query: `(min-width: 1200px)` });
  const large = useMediaQuery({ query: `(min-width: 1900px)` });
  const smallUp = useMediaQuery({ query: `(max-width: 756px)` });
  const mediumUp = useMediaQuery({ query: `(max-width: 1200px)` });
  const largeUp = useMediaQuery({ query: `(max-width: 1900px)` });

  const [sizeDetect, setSizeDetect] = useState<boolean>(small);

  useEffect(() => {
    if (size === "small-down") {
      setSizeDetect(small);
    } else if (size === "medium-down") {
      setSizeDetect(medium);
    } else if (size === "large-down") {
      setSizeDetect(large);
    } else if (size === "small-up") {
      setSizeDetect(smallUp);
    } else if (size === "medium-up") {
      setSizeDetect(mediumUp);
    } else if (size === "large-up") {
      setSizeDetect(largeUp);
    }
  }, [small, medium, large, smallUp, mediumUp, largeUp, size]);
  return <div>{sizeDetect && children}</div>;
};
export default Hidden;
