import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Dot from "./Dot";
import { oboardingImages, onboardingText } from "./Onboarding.data";
import {
  CircleButton,
  Description,
  DotsContainer,
  Title,
} from "./Onboarding.styles";
import OnboardingItem from "./OnboardingItem";

const { width } = Dimensions.get("window");
const Onboarding = () => {
  const navigation = useNavigation<any>();
  const [itemsCoords, setItemCoords] = useState<number[]>([]);
  const scrollX = useSharedValue(0);
  const onboardTextsRef = useAnimatedRef<Animated.ScrollView>();
  const onboardingImagesRef = useAnimatedRef<Animated.ScrollView>();

  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x;
    scrollTo(onboardTextsRef, e.contentOffset.x, 0, false);
  });

  const scrollHandlerTexts = useAnimatedScrollHandler((e) => {
    scrollTo(onboardingImagesRef, e.contentOffset.x, 0, false);
  });

  const handleNextItem = () => {
    if (scrollX.value === 0) {
      return (onboardingImagesRef?.current as any)?.scrollTo({
        x: itemsCoords[1],
        y: 0,
      });
    }
    if (scrollX.value === itemsCoords[1]) {
      return (onboardingImagesRef?.current as any)?.scrollTo({
        x: itemsCoords[2],
        y: 0,
      });
    }
    navigation.reset({ routes: [{ name: "Auth" }] });
  };
  console.log(itemsCoords);
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <View>
        <Animated.ScrollView
          ref={onboardingImagesRef}
          scrollEventThrottle={16}
          snapToAlignment="center"
          pagingEnabled
          bounces={false}
          decelerationRate="fast"
          onScroll={scrollHandler}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ paddingTop: 40 }}
        >
          {oboardingImages.map((item, index) => (
            <OnboardingItem
              key={`onboarding-${index}`}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                console.log(layout);
                itemsCoords[index] = layout.x;
                setItemCoords(itemsCoords);
              }}
              item={item}
              index={index}
              scrollX={scrollX}
            />
          ))}
        </Animated.ScrollView>
      </View>

      <DotsContainer>
        {oboardingImages.map((_, index) => {
          return <Dot key={`dots-${index}`} index={index} scrollX={scrollX} />;
        })}
      </DotsContainer>

      <View style={{ flex: 1, marginTop: 40 }}>
        <Animated.ScrollView
          onScroll={scrollHandlerTexts}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          horizontal
          decelerationRate="fast"
          ref={onboardTextsRef}
        >
          {onboardingText.map((item, index) => (
            <View
              key={`text-${index}`}
              style={{ width, alignItems: "center", paddingHorizontal: 20 }}
            >
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <CircleButton onPress={handleNextItem} />
      </View>
    </View>
  );
};

export default Onboarding;
