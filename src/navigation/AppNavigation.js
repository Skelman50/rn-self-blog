import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import { THEME } from "../theme";
import BookedScreen from "../screens/BookedScreen";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";

const backgroundColor = Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff";

const headerTintColor = Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR;

const navigationOptions = {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor },
    headerTintColor
  }
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navigationOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen
  },
  navigationOptions
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      ),
      tabBarLabel: "All"
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons name="ios-star" size={25} color={info.tintColor} />
      ),
      tabBarLabel: "Favorites"
    }
  }
};

const BottomNabigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: "#fff",
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR
        },
        shifting: true
      })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR
        }
      });

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  navigationOptions
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen
  },
  navigationOptions
);

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNabigator,
      navigationOptions: {
        drawerLabel: "Главная"
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "О приложении"
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: "Новый пост"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: "open-bold"
      }
    }
  }
);

export const AppNavigation = createAppContainer(MainNavigator);
