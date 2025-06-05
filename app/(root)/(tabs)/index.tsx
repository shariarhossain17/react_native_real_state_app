import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Sign in</Link>
      <Link href="/properties/1">property</Link>
    </View>
  );
};

export default Index;
