import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { togglePost } from "../store/actions/postActions";

const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const postId = navigation.getParam("postId");

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  const post = useSelector(state =>
    state.post.allPosts.find(post => post.id === postId)
  );

  const toggleHandler = useCallback(() => {
    dispatch(togglePost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

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
  const toggleHandler = navigation.getParam("toggleHandler");
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: `Post from  ${new Date(date).toLocaleDateString()}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
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
