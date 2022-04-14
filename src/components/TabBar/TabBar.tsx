import React from "react";
import { Text } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import CartSvg from "../../../assets/icons/CartSvg";
import DiscoverSvg from "../../../assets/icons/DiscoverSvg";
import FavoritesSvg from "../../../assets/icons/Favorites";
import HomeIcon from "../../../assets/icons/HomeSvg";
import NotificationsSvg from "../../../assets/icons/NotificationsSvg";
import { Colors } from "../../styles/theme/colors";
import { Container, TabItem } from "./TabBar.styles";

const routes = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Discover",
    icon: DiscoverSvg,
  },
  { name: "Cart", icon: CartSvg },
  { name: "Favorites", icon: FavoritesSvg },
  { name: "Notification", icon: NotificationsSvg },
];
const TabBar = (props) => {
  const { state } = props;
  const renderTabItem = (item, index) => {
    const isActive = index === state.index;

    return (
      <TabItem key={item.name}>
        {isActive ? (
          <Animated.View entering={FadeInUp}>
            <item.icon color={Colors.orange} />
          </Animated.View>
        ) : (
          <item.icon color={"#D3D1D8"} />
        )}
      </TabItem>
    );
  };
  console.log(props.state);
  return <Container>{routes.map(renderTabItem)}</Container>;
};

export default TabBar;
