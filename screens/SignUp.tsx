import React from "react";
import { View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Sign Up</Text>
      <Input
        placeholder="Full Name"
        leftIcon={{ type: "font-awesome", name: "user" }}
        containerStyle={{ marginVertical: 20 }}
      />
      <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        containerStyle={{ marginVertical: 20 }}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        containerStyle={{ marginVertical: 20 }}
        secureTextEntry
      />
      <Button
        title="Sign Up"
        buttonStyle={{ backgroundColor: "#1DB954" }}
        containerStyle={{ marginVertical: 10 }}
      />
      <Button
        title="Go to Sign In"
        type="clear"
        titleStyle={{ color: "#1DB954" }}
        onPress={goToSignIn}
      />
    </View>
  );
};

export default SignUpScreen;
