import React from "react";
import { Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  state = {
    isReady: false
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View>
        <View style={{ padding: 16 }}>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              backgroundColor: "red",
              width: "100%",
              height: (Dimensions.get("screen").width * 9) / 16 - 16 - 16
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(0,0,0, 0.8)",
                paddingRight: 4,
                paddingLeft: 4,
                paddingTop: 2,
                paddingBottom: 2,
                borderRadius: 2,
                margin: 8
              }}
            >
              <Text
                style={{ fontFamily: "roboto", color: "#fff", fontSize: 12 }}
              >
                4:27
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <View
              style={{
                backgroundColor: "blue",
                height: 40,
                width: 40,
                borderRadius: 20,
                marginRight: 8
              }}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{
                    flex: 1,
                    fontFamily: "roboto",
                    fontSize: 16,
                    color: "#333"
                  }}
                >
                  ELON MUSK QUIERE SACAR a TESLA de WALL STREET
                </Text>
                <Icon
                  name="more-vert"
                  size={19}
                  color="#888"
                  style={{ marginRight: -8, marginLeft: -4 }}
                />
              </View>
              <View
                style={{
                  marginTop: 4,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ color: "#666", fontSize: 13, fontFamily: "roboto" }}
                >
                  Wall Street Wolverine
                </Text>
                <Text style={{ fontSize: 4, margin: 4 }}>•</Text>
                <Text
                  style={{ color: "#666", fontSize: 13, fontFamily: "roboto" }}
                >
                  14K views
                </Text>
                <Text style={{ fontSize: 4, margin: 4 }}>•</Text>
                <Text
                  style={{ color: "#666", fontSize: 13, fontFamily: "roboto" }}
                >
                  1 day ago
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#ddd" }} />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      roboto: require("./assets/fonts/Roboto-Regular.ttf")
    });
    return;
  }
}
