import React from "react";
import { Svg, Path } from "react-native-svg";
const FavoritesSvg = (props) => {
  const { color = "#D3D1D8", width = 26, height = 26 } = props;
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${26} ${26}`} fill="none">
      <Path
        d="M17.8663 3C16.8402 3.00018 15.8326 3.27346 14.9471 3.79177C14.0615 4.31009 13.3299 5.05476 12.8273 5.94932C12.3246 5.05455 11.5927 4.30974 10.7069 3.79141C9.82109 3.27308 8.81324 2.99992 7.78692 3C6.21506 3.08489 4.73644 3.77251 3.65864 4.91981C2.58084 6.0671 1.98685 7.58575 2.00022 9.15985C2.00022 17.1869 12.8273 22.787 12.8273 22.787C12.8273 22.787 23.6544 17.1897 23.6544 9.15985C23.6678 7.58552 23.0736 6.06667 21.9955 4.91933C20.9174 3.772 19.4384 3.08454 17.8663 3V3Z"
        fill={color}
      />
    </Svg>
  );
};

export default FavoritesSvg;
