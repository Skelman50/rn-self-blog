import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { THEME } from "../theme";

export const AppHeaderIcon = props => {
  const color = Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR;
  return (
    <HeaderButton
      iconSize={24}
      color={color}
      IconComponent={Ionicons}
      {...props}
    />
  );
};
