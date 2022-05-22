import React, { useEffect } from "react";
import { FlatList, View, Image, Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { oboardingImages } from "./Onboarding.data";
import { CircleContainer, Dot, DotsContainer } from "./Onboarding.styles";

const { width } = Dimensions.get("window");
const Onboarding = () => {
  const isMounted = useSharedValue(0);
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e) => {
    console.log(e.contentOffset.x);
    scrollX.value = e.contentOffset.x;
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

  useEffect(() => {
    isMounted.value = 1;
  }, []);
  const renderOboardingItem = (item, index) => {
    return (
      <View style={{ width, justifyContent: "center", alignItems: "center" }}>
        <CircleContainer
          style={
            {
              // marginHorizontal: index > 0 ? 50 : 30,
            }
          }
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
      </View>
    );
  };
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <View>
        <Animated.ScrollView
          scrollEventThrottle={30}
          snapToAlignment="center"
          pagingEnabled
          bounces={false}
          decelerationRate="fast"
          onScroll={scrollHandler}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ paddingTop: 40 }}
        >
          {oboardingImages.map(renderOboardingItem)}
        </Animated.ScrollView>
      </View>

      <DotsContainer>
        {oboardingImages.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = interpolate(
            scrollX.value,
            inputRange,
            [8, 10, 100],
            Extrapolate.CLAMP
          );

          const dotHeight = interpolate(
            scrollX.value,
            inputRange,
            [8, 10, 8],
            Extrapolate.CLAMP
          );

          return (
            <Animated.View
              key={`dots-${index}`}
              style={{
                marginHorizontal: 8,
                backgroundColor: "#ffc529",
                width: dotWidth,
                height: dotHeight,
              }}
            />
          );
        })}
      </DotsContainer>
    </View>
  );
};

export default Onboarding;
