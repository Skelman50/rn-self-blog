import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate("Post");
  };
  return (
    <View style={styles.center}>
      <Text>MAIN</Text>
      <Button title="go to post" onPress={goToPost} />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "My blog"
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainScreen;
