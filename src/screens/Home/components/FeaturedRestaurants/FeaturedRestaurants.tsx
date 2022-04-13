import React from "react";
import { FlatList, View } from "react-native";
import Card from "../../../../components/Card/Card";
import {
  FeaturedRestaurant,
  FEATURED_RESTAURANTS,
} from "./FeaturedRestaurants.data";
import {
  Title,
  ViewAllButton,
  ViewAllText,
} from "./FeaturedRestaurants.styles";

const FeaturedRestaurants = () => {
  const renderCard = ({ item }: { item: FeaturedRestaurant }) => (
    <Card {...item} />
  );
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
        data={FEATURED_RESTAURANTS}
        renderItem={renderCard}
      />
    </View>
  );
};

export default FeaturedRestaurants;
