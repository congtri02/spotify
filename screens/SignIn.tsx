import React from "react";
import { View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Sign In</Text>
      <Input
        placeholder="Username or Email"
        leftIcon={{ type: "font-awesome", name: "user" }}
        containerStyle={{ marginVertical: 20 }}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        containerStyle={{ marginVertical: 20 }}
        secureTextEntry
      />
      <Button
        title="Sign In"
        buttonStyle={{ backgroundColor: "#1DB954" }}
        containerStyle={{ marginVertical: 10 }}
      />
      <Button
        title="Go to Sign Up"
        type="clear"
        titleStyle={{ color: "#1DB954" }}
        onPress={goToSignUp}
      />
    </View>
  );
};

export default SignInScreen;
