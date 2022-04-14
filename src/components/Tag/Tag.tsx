import React from "react";
import { View, Text } from "react-native";

const Tag = (props) => {
  const { title } = props;
  return (
    <View
      style={{
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        borderRadius: 5,
        marginRight: 8,
      }}
    >
      <Text
        style={{
          flex: 1,
          color: "#515154",
          fontFamily: "SFPro-Regular",
          fontSize: 13,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Tag;
