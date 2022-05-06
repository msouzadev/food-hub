import React, { useEffect } from "react";
import { FlatList, View, Image } from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import { oboardingImages } from "./Onboarding.data";
import { CircleContainer } from "./Onboarding.styles";

const Onboarding = () => {
  const isMounted = useSharedValue(0);
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const _onViewableItemsChanged = ({ viewableItems, changed }: any) => {
    if (changed.length >= 1 && changed[0].index !== 0) {
      isMounted.value = 0;
      isMounted.value = withDelay(200, withTiming(1));
    }
    if (changed[0].index === 0 && isMounted.value === 1) {
      isMounted.value = 0;
      isMounted.value = withDelay(200, withTiming(1));
    }
  };
  const subImage1Style = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(interpolate(isMounted.value, [0, 1], [0, -70])),
      },
    ],
    top: 35,
    zIndex: withTiming(interpolate(isMounted.value, [0, 1], [0, 2])),
  }));

  const subImage2Style = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(interpolate(isMounted.value, [0, 1], [0, -120])),
      },
    ],
    top: withTiming(interpolate(isMounted.value, [0, 1], [10, 200])),
    zIndex: withTiming(interpolate(isMounted.value, [0, 1], [0, 2])),
  }));

  const subImage3Style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(interpolate(isMounted.value, [0, 1], [0, 240])),
      },
    ],
    zIndex: withTiming(interpolate(isMounted.value, [0, 1], [0, 2])),
  }));

  const subImage4Style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(interpolate(isMounted.value, [0, 1], [0, 200])),
      },
      {
        translateX: withTiming(interpolate(isMounted.value, [0, 1], [0, 90])),
      },
    ],
    zIndex: withTiming(interpolate(isMounted.value, [0, 1], [0, 2])),
  }));

  const subImage5Style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(interpolate(isMounted.value, [0, 1], [0, -15])),
      },
      {
        translateX: withTiming(interpolate(isMounted.value, [0, 1], [0, 100])),
      },
    ],
    zIndex: withTiming(interpolate(isMounted.value, [0, 1], [0, 2])),
  }));

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  useEffect(() => {
    isMounted.value = 1;
  }, []);

  const renderOboardingItem = ({ item, index }: any) => {
    return (
      <CircleContainer
        style={{
          marginHorizontal: 30,
        }}
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 120,
            },
            subImage1Style,
          ]}
        >
          <Image source={item.subs[0]} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
            },
            subImage2Style,
          ]}
        >
          <Image source={item.subs[1]} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
            },
            subImage3Style,
          ]}
        >
          <Image source={item.subs[2]} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
            },
            subImage4Style,
          ]}
        >
          <Image source={item.subs[3]} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
            },
            subImage5Style,
          ]}
        >
          <Image source={item.subs[4]} />
        </Animated.View>
        <Image
          source={item.mainImage}
          style={{
            marginTop: -40,
          }}
        />
      </CircleContainer>
    );
  };
  return (
    <AppScreenContainer>
      <View style={{ alignItems: "center" }}>
        <AnimatedFlatList
          progressViewOffset={30}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          keyExtractor={(item, index) => `onboarding-image-${index}`}
          snapToAlignment="center"
          pagingEnabled
          bounces={false}
          decelerationRate="fast"
          onViewableItemsChanged={_onViewableItemsChanged}
          onScroll={scrollHandler}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={oboardingImages}
          contentContainerStyle={{
            paddingTop: 40,
          }}
          renderItem={renderOboardingItem}
        />
      </View>
    </AppScreenContainer>
  );
};

export default Onboarding;
