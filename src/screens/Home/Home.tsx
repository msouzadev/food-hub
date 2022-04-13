import React from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import Input from "../../components/Input/Input";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import { CATEGORIES, CategoryType } from "./Home.data";
import { FilterButton, Title } from "./Home.styles";

const searchIcon = require("../../../assets/img/search.png");
const filterIcon = require("../../../assets/img/filter.png");

const Home = (props) => {
  const renderCategoryItem = ({ item }: { item: CategoryType }) => (
    <Category {...item} isSelected={item.name === "Burguer"} />
  );
  return (
    <AppScreenContainer>
      <Header />
      <ScrollView>
        <Title>
          What would you like{"\n"}
          to order
        </Title>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Input
            backgroundColor="#F3F3F3"
            placeholder="Find for food or restaurant..."
            icon={<Image source={searchIcon} />}
          />
          <FilterButton
            style={{
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

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
          horizontal
          data={CATEGORIES}
          keyExtractor={(item) => item.name}
          renderItem={renderCategoryItem}
        />
      </ScrollView>
    </AppScreenContainer>
  );
};

export default Home;
