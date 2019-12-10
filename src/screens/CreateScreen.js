import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { addPost } from "../store/actions/postActions";
import PhotoPicker from "../components/PhotoPicker";

const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [currentImg, setCurrentImg] = useState(null);
  const dispatch = useDispatch();

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: currentImg,
      booked: false
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
  };

  const photoPickHandler = uri => {
    setCurrentImg(uri);
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Add a text"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title="Create a post"
            color={THEME.MAIN_COLOR}
            onPress={createPostHandler}
            disabled={!text || !currentImg}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10
  },
  textArea: {
    padding: 10,
    marginBottom: 10
  }
});

export default CreateScreen;
