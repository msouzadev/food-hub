import React, { useState } from "react";
import { View, Image, FlatList, Text, Dimensions } from "react-native";
import { BounceInDown } from "react-native-reanimated";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Tabs from "../../components/Tabs/Tabs";
import { FilterButton } from "../Home/Home.styles";
import { foodItems } from "../Restaurant/Restaurant.data";
import { Avatar, ListTitle } from "./SearchFood.styles";
const avatar = require("../../../assets/img/avatar.png");
const searchIcon = require("../../../assets/img/search.png");
const filterIcon = require("../../../assets/img/filter.png");

const { width } = Dimensions.get("screen");
const SearchFood = () => {
  const [currentTab, seCurrentTab] = useState(0);

  const renderFoodCard = ({ item, index }: any) => {
    const isRight = index % 2 > 0;
    return (
      <Card
        animationProps={{
          entering: BounceInDown.duration(index * 400),
        }}
        index={index}
        isFood
        width={(width / 2) * 0.8}
        style={{
          marginBottom: isRight ? 110 : 20,
          marginTop: isRight ? -80 : 0,
          flexGrow: 1,
          flexShirink: 0,
          flexBasis: "50%",
        }}
        onClick={() => {}}
        {...item}
      />
    );
  };
  return (
    <AppScreenContainer>
      <Header
        title={"Search Food"}
        rightItem={<Avatar height={38} width={38} source={avatar} />}
      />
      <View style={{ marginVertical: 40, flexDirection: "row" }}>
        <Input
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
      </View>
      <Tabs
        tabs={["Food Item", "Restaurant"]}
        active={currentTab}
        onChange={seCurrentTab}
      />
      {currentTab === 0 && (
        <FlatList
          numColumns={2}
          // style={{ marginTop: 40 }}
          contentContainerStyle={{
            paddingVertical: 20,
            marginTop: 40,
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <ListTitle style={{ marginBottom: 10 }}>
              Found {"\n"}30 results
            </ListTitle>
          }
          data={foodItems}
          keyExtractor={(item) => item.name}
          renderItem={renderFoodCard}
        />
      )}
      {currentTab === 1 && (
        <FlatList
          numColumns={2}
          // style={{ marginTop: 40 }}
          contentContainerStyle={{
            paddingVertical: 20,
            marginTop: 40,
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <ListTitle style={{ marginBottom: 10 }}>
              Found {"\n"}30 results
            </ListTitle>
          }
          data={foodItems}
          keyExtractor={(item) => item.name}
          renderItem={renderFoodCard}
        />
      )}
    </AppScreenContainer>
  );
};

export default SearchFood;
