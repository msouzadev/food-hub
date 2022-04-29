import React from "react";
import { Image, ImageBackground, View } from "react-native";
import Animated from "react-native-reanimated";
import Tag from "../Tag/Tag";
import {
  Container,
  Title,
  DescriptionContainer,
  DeliveryDescription,
  Description,
  Price,
  Currency,
  Badge,
  FavoriteContainer,
  Rating,
  ReviewCount,
} from "./Card.styles";

const motoboyIcon = require("../../../assets/img/motoboy.png");
const heartIcon = require("../../../assets/img/heart.png");
const startIcon = require("../../../assets/img/star.png");

interface CardProps {
  name: string;
  isFood?: boolean;
  description?: string;
  price?: number;
  isFavorited?: boolean;
  rating?: number;
  reviewCount: number;
  onClick: (item: any) => void;
  image: any;
  width?: number;
  style?: any;
  animationProps?: any;
}
const Card = (props: CardProps) => {
  const {
    name,
    isFood,
    description,
    price,
    isFavorited,
    rating,
    reviewCount,
    onClick,
    image,
    width = 270,
    style,
    animationProps,
  } = props;
  const handlePress = (item: any) => () => {
    onClick(item);
  };
  return (
    <Animated.View {...animationProps}>
      <Container
        style={[
          {
            width,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          },
          style,
        ]}
        onPress={handlePress({ name, image })}
      >
        {/* @ts-ignore */}
        <ImageBackground
          style={{
            padding: 10,
            borderRadius: 70,
            height: 140,
            width,
          }}
          source={image}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Badge>
              {isFood ? (
                <Price>
                  <Currency>$</Currency>
                  {price}
                </Price>
              ) : (
                <>
                  <Rating>2.5</Rating>
                  <Image source={startIcon} />
                  <ReviewCount>
                    ({reviewCount} {reviewCount > 25 && "+"})
                  </ReviewCount>
                </>
              )}
            </Badge>
            <FavoriteContainer isFavorited={isFavorited}>
              <Image source={heartIcon} />
            </FavoriteContainer>
          </View>
          {isFood && (
            <Badge
              isFood
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
              <Rating>{rating}</Rating>
              <Image source={startIcon} />
              <ReviewCount>
                ({reviewCount} {reviewCount > 25 && "+"})
              </ReviewCount>
            </Badge>
          )}
        </ImageBackground>
        <DescriptionContainer>
          <Title>{name}</Title>
          {!isFood && (
            <>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                  <Image source={motoboyIcon} />
                  <DeliveryDescription>free delivery</DeliveryDescription>
                </View>
              </View>

              <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
                <Tag title="BURGUER" />
                <Tag title="CHICKEN" />
                <Tag title="FAST FOOD" />
              </View>
            </>
          )}
          {isFood && <Description>{description}</Description>}
        </DescriptionContainer>
      </Container>
    </Animated.View>
  );
};

export default Card;
