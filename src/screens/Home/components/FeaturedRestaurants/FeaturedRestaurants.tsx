import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";
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
  const navigation = useNavigation();
  const handleClickRestaurant = (item) => {
    navigation.navigate("Restaurant", { name: item.name, image: item.image });
  };
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
      <Card {...item} onClick={handleClickRestaurant} />
    </Animated.View>
  );
  return (
    <View style={{ marginTop: 10, flex: 1 }}>
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
        contentContainerStyle={{ paddingVertical: 20 }}
        horizontal
        keyExtractor={(item) => item.name}
        data={FEATURED_RESTAURANTS}
        renderItem={renderCard}
      />
    </View>
  );
};

export default FeaturedRestaurants;
