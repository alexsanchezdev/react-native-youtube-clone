import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { Font, AppLoading } from "expo";
import AppStack from "./src/navigation/AppStack";

const AssetsLoader = ({ navigation }) => (
  <AppLoading
    startAsync={cacheResourcesAsync}
    onFinish={() => navigation.navigate("App")}
    onError={console.warn}
  />
);

const cacheResourcesAsync = async () => {
  await Font.loadAsync({
    "roboto-regular": require("./src/assets/fonts/Roboto-Regular.ttf")
  });
};

export default createSwitchNavigator(
  {
    Loaders: AssetsLoader,
    App: AppStack
  },
  {
    initialRouteName: "Loaders"
  }
);
