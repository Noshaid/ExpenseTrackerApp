import { ScrollView, View } from "react-native";
import React from "react";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import CategoryHeaderSection from "../components/CategoryHeaderSection";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      <NavBar />
      <Header />
      <CategoryHeaderSection />

      <ScrollView></ScrollView>
    </View>
  );
};

export default Home;
