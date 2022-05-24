import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Dot from "./Dot";
import { oboardingImages } from "./Onboarding.data";
import { DotsContainer } from "./Onboarding.styles";
import OnboardingItem from "./OnboardingItem";

const Onboarding = () => {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x;
  });
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <View>
        <Animated.ScrollView
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
            <OnboardingItem item={item} index={index} scrollX={scrollX} />
          ))}
        </Animated.ScrollView>
      </View>

      <DotsContainer>
        {oboardingImages.map((_, index) => {
          return <Dot index={index} scrollX={scrollX} />;
        })}
      </DotsContainer>
    </View>
  );
};

export default Onboarding;
