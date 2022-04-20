import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Animated, {
  FadeInUp,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import FavoritesSvg from "../../../assets/icons/Favorites";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import BackButton from "../../components/BackButton/BackButton";
import Card from "../../components/Card/Card";
import { FavoriteContainer } from "../../components/Card/Card.styles";
import ListPicker from "../../components/ListPicker/ListPicker";
import Tag from "../../components/Tag/Tag";
import { Colors } from "../../styles/theme/colors";
import { width } from "../../utils/dimensions";
import PopularItems from "../Home/components/PopularItems/PopularItems";
import { foodCategories, foodItems } from "./Restaurant.data";
import {
  DeliveryDescription,
  Rating,
  RestaurantAddress,
  RestaurantLogoContainer,
  RestaurantName,
  ReviewCount,
  SeeReviewText,
} from "./Restaurant.styles";

const imageWidth = width * 0.9;

const restaurantLogo = require("../../../assets/img/restaurantLogo.png");
const motoboyIcon = require("../../../assets/img/motoboy.png");
const clockIcon = require("../../../assets/img/clock.png");
const starIcon = require("../../../assets/img/restaurantStar.png");
// const 
const restaurantTags = ["PIZZA", "CHICKEN", "FAST FOOD"];
const Restaurant = (props) => {
  const { route, navigation } = props;
  const [categorySelected,setCategory] = useState('All')
  const { params } = route;
  const isMount = useSharedValue(0);
  useEffect(() => {
    isMount.value = 1;
    return () => {
      isMount.value = 0;
    };
  }, []);
  const imageStyles = useAnimatedStyle(() => ({
    borderRadius: withTiming(interpolate(isMount.value, [0, 1], [0, 15])),
    height: withTiming(interpolate(isMount.value, [0, 1], [0, 150])),
    width: withTiming(interpolate(isMount.value, [0, 1], [0, imageWidth])),
    transform: [
      { scale: withTiming(interpolate(isMount.value, [0, 1], [0.2, 1])) },
    ],
  }));

  const logoContainerStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(interpolate(isMount.value, [0, 1], [0.2, 1]), {
          duration: 500,
        }),
      },
    ],
  }));

  const renderFoodCard = ({item,index}:{item:any,index:string}) => <Card  index={index} isFood width={150} {...item}/>
  return (
    <AppScreenContainer styles={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Animated.Image
            style={[{ height: 0, width: 0 }, , imageStyles]}
            source={params.image}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              position: "absolute",
              width: "100%",
              padding: 15,
            }}
          >
            <BackButton onPress={navigation.goBack} />
            <FavoriteContainer isFavorited>
              <FavoritesSvg width={20} height={20} color="#FFFFFF" />
            </FavoriteContainer>
          </View>
        </View>
        <RestaurantLogoContainer style={logoContainerStyles}>
          <View
            style={{
              borderRadius: 40,
              height: 80,
              width: 80,
              backgroundColor: Colors.yellow,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 25,
            }}
          >
            <Image
              width={80}
              height={80}
              style={{
                backgroundColor: "transparent",
                width: 80,
                height: 80,
                borderRadius: 40,
              }}
              source={restaurantLogo}
            />
          </View>
        </RestaurantLogoContainer>
        <Animated.View entering={FadeInUp.duration(700)} style={{ justifyContent: "center", marginTop: 10 }}>
          <RestaurantName>Mc Donald's</RestaurantName>
          <RestaurantAddress>4102 Pretty View Lanenda</RestaurantAddress>
        </Animated.View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            {restaurantTags.map((tag) => (
              <Tag key={tag} title={tag} />
            ))}
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={motoboyIcon} />
              <DeliveryDescription>free delivery</DeliveryDescription>
            </View>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={clockIcon} />
              <DeliveryDescription>10-15 mins</DeliveryDescription>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",marginTop: 10}}>
            <Image source={starIcon} />
            <Rating>4.5</Rating>
            <ReviewCount>(30+)</ReviewCount>
            <TouchableOpacity>
              <SeeReviewText>See Review ></SeeReviewText>
            </TouchableOpacity>
          </View>
        </View>
        <PopularItems />
        <ListPicker onClick={setCategory} selected={categorySelected} items={foodCategories}/>
        <FlatList contentContainerStyle={{paddingVertical: 20}} showsHorizontalScrollIndicator={false}  horizontal keyExtractor={item => item.name} data={foodItems} renderItem={renderFoodCard}/>
      </ScrollView>
    </AppScreenContainer>
  );
};

export default Restaurant;
