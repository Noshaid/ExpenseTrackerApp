import {
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import CategoryHeaderSection from "../components/CategoryHeaderSection";
import categoriesData from "../Model/CategoryData";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import FastImage from "react-native-fast-image";

const Home = () => {
  const [viewMode, setViewMode] = useState("charts");
  const [categories, setCategories] = useState(categoriesData);

  function renderCategoryList() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderRadius: 5,
            backgroundColor: COLORS.white,
            ...styles.shadow,
            margin: 5,
          }}
        >
          <Image
            source={item.icon}
            style={{ width: 20, height: 20, tintColor: item.color }}
          />
          {/* <FastImage
            style={{ width: 20, height: 20 }}
            source={item.icon}
            resizeMode={FastImage.resizeMode.contain}
            tintColor={item.color}
          /> */}
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.primary,
              ...FONTS.h4,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
        <View>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
            style={{ paddingBottom: 10 }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      <NavBar />
      <Header />
      <CategoryHeaderSection onPress={(mode) => setViewMode(mode)} />
      {viewMode === "list" && <View>{renderCategoryList()}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Home;
