import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import Input from "../../components/Input/Input";
import Category from "./components/Category/Category";
import FeaturedRestaurants from "./components/FeaturedRestaurants/FeaturedRestaurants";
import Header from "./components/Header/Header";
import PopularItems from "./components/PopularItems/PopularItems";
import { CATEGORIES, CategoryType } from "./Home.data";
import { FilterButton, Title } from "./Home.styles";

const searchIcon = require("../../../assets/img/search.png");
const filterIcon = require("../../../assets/img/filter.png");

const Home = (props) => {
  const { route, navigation } = props;
  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: CategoryType;
    index: number;
  }) => {
    return (
      <Category {...item} index={index} isSelected={item.name === "Burguer"} />
    );
  };
  const handleSearch = () => navigation.navigate("SearchFood");
  return (
    <AppScreenContainer>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>
          What would you like{"\n"}
          to order
        </Title>
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Input
            editable={false}
            style={{
              marginRight: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
            }}
            backgroundColor="#F3F3F3"
            placeholder="Find for food or restaurant..."
            icon={<Image source={searchIcon} />}
          />
          <FilterButton
            style={{
              marginRight: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,

              elevation: 1,
            }}
          >
            <Image source={filterIcon} />
          </FilterButton>
        </TouchableOpacity>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
          horizontal
          data={CATEGORIES}
          keyExtractor={(item) => item.name}
          renderItem={renderCategoryItem}
        />
        <FeaturedRestaurants />
        <PopularItems />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default Home;
