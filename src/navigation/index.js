import React from "react";
import { Image, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppStack from "./AppStack";
import YouTubeLogo from "../assets/img/youtube_logo.png";
import { colors } from "../constants";

export default createStackNavigator(
  {
    App: AppStack
  },
  {
    navigationOptions: {
      headerLeft: (
        <Image
          source={YouTubeLogo}
          style={{ width: 90, marginLeft: 16, height: "100%" }}
          resizeMode="contain"
        />
      ),
      headerRight: (
        <View
          style={{
            marginRight: 16,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Icon
            name="cast"
            size={22}
            color={colors.grey}
            style={{ marginRight: 10 }}
          />
          <Icon
            name="videocam"
            size={24}
            color={colors.grey}
            style={{ marginRight: 10, marginLeft: 10 }}
          />
          <Icon
            name="search"
            size={24}
            color={colors.grey}
            style={{ marginRight: 10, marginLeft: 10 }}
          />
          <Icon
            name="account-circle"
            size={24}
            color={colors.grey}
            style={{ marginLeft: 10 }}
          />
        </View>
      )
    }
  }
);
