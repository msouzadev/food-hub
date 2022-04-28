import React, { useDebugValue, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { Container, Label, Tab } from "./Tabs.styles";
import { TabProps } from "./Tabs.types";

const { width } = Dimensions.get("screen");
const Tabs = (props: TabProps) => {
  const { tabs, active, onChange } = props;
  const tabsLength = tabs.length;

  const tabWidth = (width - 50) / tabs.length;

  const tabWidthLeft = useDerivedValue(() => {
    return tabWidth * active;
  }, [active]);

  const tabStyle = useAnimatedStyle(() => ({
    left: withTiming(tabWidthLeft.value),
  }));

  const onGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: (e) => {
        console.log(e.absoluteX);
        // triggered at the start of the pan gesture
      },
      onActive: ({ velocityX, translationX }) => {
        console.log({
          translationX,
          tabWidth: tabWidth * tabsLength,
          velocityX,
          active,
        });

        if (!active && translationX < 0) {
          return;
        }
        if (velocityX > 0 && translationX >= tabWidth * tabsLength - tabWidth) {
          return;
        }
        // console.log(tabWidth * tabsLength - tabWidth);
        // if (e.translationX > 0) {
        // console.log(e.translationX);
        tabWidthLeft.value = translationX;
        // }
        // triggered on every frame of the pan gesture
      },
      onEnd: () => {
        // triggered at the end of the pan gesture
      },
    });

  const handlePressTab = (index: number) => () => onChange(index);
  return (
    <Container>
      <Animated.View style={[styles.tab, tabStyle, { width: tabWidth }]} />
      {tabs.map((item, index) => (
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          enabled={active === index}
        >
          <Animated.View>
            <TouchableOpacity
              onPress={handlePressTab(index)}
              style={{
                width: tabWidth,
                paddingVertical: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Label isActive={active === index}>{item}</Label>
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  tab: {
    position: "absolute",
    borderRadius: 23.5,
    marginTop: 4,
    marginLeft: 4,
    height: 47,
    backgroundColor: "#fe724c",
  },
});
export default Tabs;
