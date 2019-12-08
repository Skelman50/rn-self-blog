import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const post = DATA.find(post => post.id === postId);

  const removeHandler = () => {
    Alert.alert(
      "Deletning post",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Delete", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        color={THEME.DANGER_COLOR}
        title="Delete"
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: `Post from  ${new Date(date).toLocaleDateString()}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName={iconName}
          onPress={() => console.log("Press icon")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: "open-regular"
  }
});

export default PostScreen;
