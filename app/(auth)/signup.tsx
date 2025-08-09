import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const signup = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Button title="Sign Up" onPress={() => router.push("/signin")} />
    </View>
  );
};

export default signup;
