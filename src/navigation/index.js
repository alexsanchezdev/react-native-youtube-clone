import React from "react";
import { createStackNavigator } from "react-navigation";
import AppStack from "./AppStack";
import { colors } from "../constants";
import MainHeader from "../components/MainHeader";

export default createStackNavigator(
  {
    App: AppStack
  },
  {
    navigationOptions: {
      header: <MainHeader />,
      headerStyle: {
        backgroundColor: colors.white
      }
    }
  }
);
