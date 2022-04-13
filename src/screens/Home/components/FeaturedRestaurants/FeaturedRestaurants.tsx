import React from "react";
import { FlatList, View } from "react-native";
import Card from "../../../../components/Card/Card";
import {
  Title,
  ViewAllButton,
  ViewAllText,
} from "./FeaturedRestaurants.styles";

const FeaturedRestaurants = () => {
  const renderCard = ({ item }) => <Card {...item} />;
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>Featured restaurants</Title>
        <ViewAllButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllButton>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 20 }}
        horizontal
        keyExtractor={(item) => item.name}
        data={[{ name: "McDonald's" }, { name: "Starbucks" }]}
        renderItem={renderCard}
      />
    </View>
  );
};

export default FeaturedRestaurants;
