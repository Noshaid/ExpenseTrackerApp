import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const NavBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: 80,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          width: 50,
        }}
        onPress={() => console.log("press back")}
      >
        <Image
          source={icons.back_arrow}
          style={{ width: 30, height: 30, tintColor: COLORS.primary }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          width: 50,
        }}
        onPress={() => console.log("press back")}
      >
        <Image
          source={icons.more}
          style={{ width: 30, height: 30, tintColor: COLORS.primary }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
