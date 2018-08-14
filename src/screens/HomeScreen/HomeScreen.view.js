import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import FeedVideo from "../../components/FeedVideo";

const HomeScreenView = ({ data }) => (
  <SafeAreaView style={{ backgroundColor: "#fff" }}>
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={data}
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

export default HomeScreenView;
