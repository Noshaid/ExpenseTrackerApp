import { View, Text, Image } from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <Text style={{ ...FONTS.h2, color: COLORS.primary }}>My Expenses</Text>
      <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
        Summary (private)
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: COLORS.lightGray,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.calendar}
            style={{ width: 20, height: 20, tintColor: COLORS.lightBlue }}
          />
        </View>
        <View style={{ marginLeft: SIZES.padding }}>
          <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
            13 Oct, 2022
          </Text>
          <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>
            18% more than last month
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
