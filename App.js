import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { Font, AppLoading } from "expo";
import FeedVideo from "./src/components/FeedVideo";

const mockData = [
  {
    id: 1,
    title: "PREGUNTAS LAMENTABLES POR LA CALLE",
    duration: "11:42",
    author: "AuronPlay",
    views: "2,4M vistas"
  },
  {
    id: 2,
    title: "PREGUNTAS LAMENTABLES POR LA CALLE",
    duration: "11:42",
    author: "AuronPlay",
    views: "2,4M vistas"
  },
  {
    id: 3,
    title: "PREGUNTAS LAMENTABLES POR LA CALLE",
    duration: "11:42",
    author: "AuronPlay",
    views: "2,4M vistas"
  },
  {
    id: 4,
    title: "PREGUNTAS LAMENTABLES POR LA CALLE",
    duration: "11:42",
    author: "AuronPlay",
    views: "2,4M vistas"
  }
];
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
      <SafeAreaView>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={mockData}
          renderItem={({ item }) => (
            <FeedVideo
              title={item.title}
              author={item.author}
              duration={item.duration}
              views={item.views}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#ddd" }} />
          )}
        />
      </SafeAreaView>
    );
  }

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
    });
    return;
  }
}
