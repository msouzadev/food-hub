import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { width } from "../../utils/dimensions";
import { Container, ItemName } from "./ListPicker.styles";

interface ListPickerProps {
  items: string[];
  selected?: string;
  onClick: (item: string) => void;
}
const ListPicker = (props: ListPickerProps) => {
  const { items, selected, onClick } = props;

  const isMounted = useSharedValue(0);
  useEffect(() => {
    isMounted.value = 1;
  }, []);

  const flatListStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          interpolate(isMounted.value, [0, 1], [width, 0]),
          {
            duration: 500,
          }
        ),
      },
    ],
  }));

  const handlePress = (item: string) => () => {
    onClick(item);
  };
  return (
    <Animated.View style={flatListStyles}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        horizontal
        keyExtractor={(item: string) => item}
        renderItem={({ item }: { item: string }) => (
          <Container onPress={handlePress(item)} isSelected={selected === item}>
            <ItemName isSelected={selected === item}>{item}</ItemName>
          </Container>
        )}
      />
    </Animated.View>
  );
};

export default ListPicker;
