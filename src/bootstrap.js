import * as Font from "expo-font";
import { DB } from "./db";

export const bootstrap = async () => {
  try {
    await Font.loadAsync({
      "open-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
      "open-regular": require("../assets/fonts/OpenSans-Regular.ttf")
    });
    await DB.init();
    console.log("DB created");
  } catch (error) {
    console.log("Error", error);
  }
};
