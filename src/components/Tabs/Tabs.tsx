import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { Container, Label, Tab } from "./Tabs.styles";
import { TabProps } from "./Tabs.types";

const { width } = Dimensions.get("screen");
const Tabs = (props: TabProps) => {
  const { tabs, active, onChange } = props;

  const tabWidth = (width - 50) / tabs.length;

  const tabWidthLeft = useDerivedValue(() => {
    return tabWidth * active;
  }, [active]);

  const tabStyle = useAnimatedStyle(() => ({
    left: withTiming(tabWidthLeft.value),
  }));

  const handlePressTab = (index: number) => () => onChange(index);

  return (
    <Container>
      <Animated.View style={[styles.tab, tabStyle, { width: tabWidth }]} />
      {tabs.map((item, index) => (
        <TouchableOpacity
          key={item}
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
