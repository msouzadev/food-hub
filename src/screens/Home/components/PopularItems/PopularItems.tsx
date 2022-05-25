import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import Animated, {
  interpolate,
  SlideInRight,
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
  const navigation = useNavigation();
  useEffect(() => {
    isMounted.value = 1;
  }, []);

  const handleNavigateFoodDetail = (food) => {
    navigation.navigate("Food", { food });
  };
  const renderCard = ({ item }: { item: FeaturedRestaurant }) => (
    <Animated.View entering={SlideInRight.delay(300)}>
      <Card {...item} isFood onClick={handleNavigateFoodDetail} />
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
