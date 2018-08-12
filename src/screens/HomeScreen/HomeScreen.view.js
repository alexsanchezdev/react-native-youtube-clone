import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import FeedVideo from "../../components/FeedVideo";

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

const HomeScreenView = () => (
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

export default HomeScreenView;
