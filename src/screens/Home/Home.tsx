import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import { useAppContext } from "../../context/AppContext";

const Home = (props) => {
  const { toggleDrawer } = useAppContext();

  return (
    <AppScreenContainer>
      <TouchableOpacity onPress={toggleDrawer}>
        <Text>OPEN</Text>
      </TouchableOpacity>
    </AppScreenContainer>
  );
};

export default Home;
