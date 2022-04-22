import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View,Image } from "react-native";
import Animated, {
  FadeInLeft,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import FavoritesSvg from "../../../assets/icons/Favorites";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import BackButton from "../../components/BackButton/BackButton";
import { FavoriteContainer } from "../../components/Card/Card.styles";
import Radio from "../../components/Radio/Radio";
import { width } from "../../utils/dimensions";
import { Rating, ReviewCount, SeeReviewText } from "../Restaurant/Restaurant.styles";
import { foodAddons } from "./Food.data";
import { AddonName, AddonPrice, ButtonText, CircleButton, Description, Price, Quantity, SectionTitle, Title } from "./Food.styles";

const imageWidth = width * 0.9;

const starIcon = require("../../../assets/img/restaurantStar.png");

const Food = (props:any) => {
  const { route, navigation } = props;
  const { params } = route;
  const { food } = params;
  const [addonSelected,setAddon] = useState('pepper')
  const isMount = useSharedValue(0);
  useEffect(() => {
    isMount.value = 1;
    return () => {
      isMount.value = 0;
    };
  }, []);

  const imageStyles = useAnimatedStyle(() => ({
    borderRadius: withTiming(interpolate(isMount.value, [0, 1], [0, 15])),
    height: withTiming(interpolate(isMount.value, [0, 1], [0, 206])),
    width: withTiming(interpolate(isMount.value, [0, 1], [0, imageWidth])),
    transform: [
      { scale: withTiming(interpolate(isMount.value, [0, 1], [0.2, 1])) },
    ],
  }));

  const renderAddon = (item:any,index:number)=> (
    <Animated.View style={{marginTop:10}}   key={index} entering={FadeInLeft.duration(800)}>
      <TouchableOpacity onPress={()=>setAddon(item.slugname)} style={{flexDirection: "row",alignItems: "center"}}>
      <Image  source={item.img}/>
      <AddonName>{item.name}</AddonName>
      <AddonPrice>{item.price}</AddonPrice>
      <Radio checked={addonSelected === item.slugname} />
      </TouchableOpacity>
    </Animated.View>
  )
  return (
    <AppScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Animated.Image
            style={[{ height: 0, width: 0 }, , imageStyles]}
            source={food.image}
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
        <View style={{marginVertical:10}}>
        <Title>Ground Beef Tacos</Title>
        <View style={{ flexDirection: "row", alignItems: "center",marginTop: 10}}>
            <Image source={starIcon} />
            <Rating>4.5</Rating>
            <ReviewCount>(30+)</ReviewCount>
            <TouchableOpacity>
              <SeeReviewText>See Review ></SeeReviewText>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{flexDirection: "row",justifyContent:'space-between'}}>
            <Price>$9.50</Price>
            <View style={{flexDirection: "row",alignItems: "center"}}>
              <CircleButton>
                <ButtonText>-</ButtonText>
              </CircleButton>
              <Quantity>02</Quantity>
              <CircleButton isIncrement>
                <ButtonText isIncrement>+</ButtonText>
              </CircleButton>
            </View>
          </View>
          <Description>Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</Description>
     
        <View style={{marginVertical:20}}>
                    <SectionTitle>
                    Choice of Add On
                    </SectionTitle>
                    {foodAddons.map(renderAddon)}
          </View>     
   </ScrollView>
   <View style={{justifyContent:'center',alignItems: "center",paddingBottom:50}}>
     <AddToCartButton/>
   </View>
    </AppScreenContainer>
  );
};

export default Food;
