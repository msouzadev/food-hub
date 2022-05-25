import React from "react";
import { Svg, Path, Line } from "react-native-svg";
const ArrowRightSvg = ({ color = "white" }) => {
  return (
    <Svg width="22" height="18" viewBox="0 0 22 18" fill="none">
      <Path
        d="M13 1.10596L20 8.57262L12 17.106"
        stroke={color}
        stroke-width="2.3"
      />
      <Line
        x1="20"
        y1="8.25596"
        x2="-1.00536e-07"
        y2="8.25596"
        stroke={color}
        stroke-width="2.3"
      />
    </Svg>
  );
};

export default ArrowRightSvg;
