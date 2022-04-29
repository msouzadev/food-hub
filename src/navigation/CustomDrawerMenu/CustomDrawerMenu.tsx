import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, FlatList, Image, View } from "react-native";
import Button from "../../components/Button/Buttons";
import { useAppContext } from "../../context/AppContext";
import { useAuthContext } from "../../context/AuthContext";
import { MENU_LIST } from "./CustomDrawerMenu.data";
import {
  Avatar,
  Container,
  UserEmail,
  UserName,
  UserInfo,
  MenuItem,
  MenuItemName,
  MenuIcon,
} from "./CustomDrawerMenu.styles";
import { MenuItemType } from "./CustomDrawerMenu.types";

interface CustomDrawerMenuProps {
  menuStyles: any;
}
const avatarImg = require("../../../assets/img/avatar.png");
const logOutImg = require("../../../assets/img/logout.png");

const CustomDrawerMenu = (props: CustomDrawerMenuProps) => {
  const { menuStyles } = props;
  const { toggleDrawer } = useAppContext();
  const { logout } = useAuthContext();
  const navigation = useNavigation();

  const handleNavigateToScreen = (screen: string) => () => {
    toggleDrawer();
  };
  const handleLogout = () => {
    toggleDrawer();
    navigation.navigate("Auth");
  };

  const renderMenu = (item: MenuItemType) => (
    <MenuItem onPress={handleNavigateToScreen(item.screen)}>
      <MenuIcon source={item.icon} />
      <MenuItemName>{item.name}</MenuItemName>
    </MenuItem>
  );

  return (
    <Container style={menuStyles}>
      <Avatar source={avatarImg} />
      <UserInfo>
        <UserName>Matheus Souza</UserName>
        <UserEmail>souza@email.com</UserEmail>
      </UserInfo>
      <FlatList
        style={{ marginTop: 20 }}
        data={MENU_LIST}
        keyExtractor={(item) => item.screen}
        renderItem={({ item }) => renderMenu(item)}
      />
      <View
        style={{
          marginBottom: 50,
          width: 100,
          height: 20,
        }}
      >
        <Button
          onPress={handleLogout}
          icon={<Image source={logOutImg} />}
          color="primary"
          title="Log Out"
        />
      </View>
    </Container>
  );
};

export default CustomDrawerMenu;
