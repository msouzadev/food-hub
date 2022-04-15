import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Card from "../../../../components/Card/Card";
import { FeaturedRestaurant } from "../FeaturedRestaurants/FeaturedRestaurants.data";
import { POPULAR_ITEMS } from "./PopularItems.data";
import { Title } from "./PopularItems.styles";

const PopularItems = () => {
  const isMounted = useSharedValue(0);
  useEffect(() => {
    isMounted.value = 1;
  }, []);

  const cardStyles = useAnimatedStyle(() => ({
    left: withTiming(interpolate(isMounted.value, [0, 1], [-300, 0]), {
      duration: 800,
    }),
  }));
  const renderCard = ({ item }: { item: FeaturedRestaurant }) => (
    <Animated.View style={cardStyles}>
      <Card {...item} isFood onClick={(item) => {}} />
    </Animated.View>
  );
  return (
    <View style={{ marginTop: 15 }}>
      <Title>Popular Items</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20 }}
        horizontal
        keyExtractor={(item) => item.name}
        data={POPULAR_ITEMS}
        renderItem={renderCard}
      />
    </View>
  );
};

export default PopularItems;
