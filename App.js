import React from "react";
import { View } from "react-native";
import { Font, AppLoading } from "expo";
import FeedVideo from "./src/components/FeedVideo";
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
        <FeedVideo
          title="PREGUNTAS LAMENTABLES POR LA CALLE"
          author="AuronPlay"
        />
        <View style={{ height: 1, backgroundColor: "#ddd" }} />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
    });
    return;
  }
}
