import React from "react";
import { View, Image, Platform } from "react-native";
import { Constants } from "expo";
import Icon from "react-native-vector-icons/MaterialIcons";
import Elevated from "react-native-elevated-view";
import { colors } from "../../constants";
import YouTubeLogo from "../../assets/img/youtube_logo.png";

const ANDROID_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
const IOS_HEADER_HEIGHT = 44 + Constants.statusBarHeight;

const MainHeaderView = () => (
  <Elevated
    elevation={4}
    style={{
      width: "100%",
      height: Platform.OS === "ios" ? IOS_HEADER_HEIGHT : ANDROID_HEADER_HEIGHT,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      paddingTop: Constants.statusBarHeight
    }}
  >
    <Image
      source={YouTubeLogo}
      style={{
        width: Platform.OS === "ios" ? 90 : 100,
        marginLeft: 16,
        height: "100%"
      }}
      resizeMode="contain"
    />
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
  </Elevated>
);

export default MainHeaderView;
