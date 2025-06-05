import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import loginImage from "../assets/images/login_img.jpeg";

const { height, width } = Dimensions.get("window");

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="flex-grow">
        <Image
          source={loginImage}
          resizeMode="cover"
          style={{
            width: width,
            height: height / 1.5,
          }}
        />

        <View>
          <Text className="text-base text-center uppercase text-black mt-10">
            Welcome to Restate
          </Text>
          <Text className="text-base text-center  text-black text-2xl font-bold">
            Let's Get You Close To {"\n"}
            <Text className="text-blue-500"> Your Ideal Home</Text>
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 mx-8 mt-4 py-3 rounded-xl items-center"
          >
            <Text className="text-black text-base font-semibold">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
