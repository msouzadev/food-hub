import React from "react";
import { FlatList, View } from "react-native";
import Card from "../../../../components/Card/Card";
import { FeaturedRestaurant } from "../FeaturedRestaurants/FeaturedRestaurants.data";
import { POPULAR_ITEMS } from "./PopularItems.data";
import { Title } from "./PopularItems.styles";

const PopularItems = () => {
  const renderCard = ({ item }: { item: FeaturedRestaurant }) => (
    <Card {...item} isFood />
  );
  return (
    <View style={{ marginTop: 15, flex: 1 }}>
      <Title>Popular Items</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 20 }}
        horizontal
        keyExtractor={(item) => item.name}
        data={POPULAR_ITEMS}
        renderItem={renderCard}
      />
    </View>
  );
};

export default PopularItems;
