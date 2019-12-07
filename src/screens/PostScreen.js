import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.center}>
      <Text>POST</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  headerTitle: "Post #2"
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PostScreen;
