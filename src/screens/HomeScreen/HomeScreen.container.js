import React from "react";
import HomeScreenView from "./HomeScreen.view";

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

class HomeScreenContainer extends React.Component {
  render() {
    return <HomeScreenView data={mockData} />;
  }
}

export default HomeScreenContainer;
