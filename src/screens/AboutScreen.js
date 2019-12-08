import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Это мое тренировочное приложение на React Native</Text>
      <Text>Version 1.0.0</Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "About",
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

export default AboutScreen;
