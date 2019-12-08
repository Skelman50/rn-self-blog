import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

const CreateScreen = () => {
  return (
    <View style={styles.center}>
      <Text>CREATE</Text>
    </View>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Create",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CreateScreen;
