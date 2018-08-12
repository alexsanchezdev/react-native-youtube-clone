import { StyleSheet, Dimensions } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    padding: 16
  },
  videoThumbnail: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: (Dimensions.get("screen").width * 9) / 16 - 16
  },
  durationContainer: {
    backgroundColor: "rgba(0,0,0, 0.8)",
    paddingRight: 4,
    paddingLeft: 4,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 2,
    margin: 8
  },
  detailsContainer: {
    flexDirection: "row",
    marginTop: 8
  },
  detailsAuthorImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 8
  },
  videoInfoContainer: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center"
  },
  bullet: {
    margin: 4
  }
}));
