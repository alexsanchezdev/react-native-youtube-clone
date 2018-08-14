import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Label } from "../components/ui-kit";

import HomeScreen from "../screens/HomeScreen";

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Trending: HomeScreen,
    Subscriptions: HomeScreen,
    Inbox: HomeScreen,
    Library: HomeScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <Icon name="home" size={28} color={tintColor} style={styles.icon} />
          );
        }
        if (routeName === "Trending") {
          return (
            <Icon
              name="whatshot"
              size={22}
              color={tintColor}
              style={styles.icon}
            />
          );
        }
        if (routeName === "Subscriptions") {
          return (
            <Icon
              name="subscriptions"
              size={22}
              color={tintColor}
              style={styles.icon}
            />
          );
        }
        if (routeName === "Inbox") {
          return (
            <Icon name="mail" size={24} color={tintColor} style={styles.icon} />
          );
        }
        if (routeName === "Library") {
          return (
            <Icon
              name="folder"
              size={24}
              color={tintColor}
              style={styles.icon}
            />
          );
        }
      },
      tabBarLabel: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <Label size={9} color={tintColor} style={styles.label}>
              Home
            </Label>
          );
        }
        if (routeName === "Trending") {
          return (
            <Label size={9} color={tintColor} style={styles.label}>
              Trending
            </Label>
          );
        }
        if (routeName === "Subscriptions") {
          return (
            <Label size={9} color={tintColor} style={styles.label}>
              Subscriptions
            </Label>
          );
        }
        if (routeName === "Inbox") {
          return (
            <Label size={9} color={tintColor} style={styles.label}>
              Inbox
            </Label>
          );
        }
        if (routeName === "Library") {
          return (
            <Label size={9} color={tintColor} style={styles.label}>
              Library
            </Label>
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "#FF0000",
      inactiveTintColor: "#666"
    }
  }
);

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    textAlign: "center"
  },
  icon: {
    marginTop: 4
  }
});
