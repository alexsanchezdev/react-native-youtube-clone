import React from "react";
import { View, ImageBackground, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";

import { Label } from "../ui-kit";
import { colors } from "../../constants";
import styles from "./FeedVideo.styles";

const FeedVideoView = ({
  title,
  duration,
  author,
  views,
  uploaded,
  videoImage,
  authorImage
}) => (
  <View style={styles.container}>
    <ImageBackground
      source={{
        uri: videoImage
      }}
      style={styles.videoThumbnail}
    >
      <View style={styles.durationContainer}>
        <Label color={colors.white} size={12}>
          {duration}
        </Label>
      </View>
    </ImageBackground>
    <View style={styles.detailsContainer}>
      <Image
        source={{
          uri: authorImage
        }}
        style={styles.detailsAuthorImage}
      />
      <View style={{ flex: 1 }}>
        <Label numberOfLines={2} ellipsizeMode="tail" size={16}>
          {title}
        </Label>
        <View style={styles.videoInfoContainer}>
          <Label color={colors.grey} size={13}>
            {author}
          </Label>
          <Label color={colors.grey} size={8} style={styles.bullet}>
            •
          </Label>
          <Label color={colors.grey} size={13}>
            {views}
          </Label>
          <Label color={colors.grey} size={8} style={styles.bullet}>
            •
          </Label>
          <Label color={colors.grey} size={13}>
            {uploaded}
          </Label>
        </View>
      </View>
      <Icon
        name="more-vert"
        size={20}
        color={colors.lightGrey}
        style={{ marginRight: -8, marginLeft: -4 }}
      />
    </View>
  </View>
);

FeedVideoView.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  uploaded: PropTypes.string.isRequired,
  videoImage: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired
};

FeedVideoView.defaultProps = {
  duration: "0:00",
  views: "0 views",
  uploaded: "2 days ago",
  videoImage: "https://i.ytimg.com/vi/hoTbZWOlYdc/hqdefault.jpg",
  authorImage:
    "https://lh3.googleusercontent.com/a-/ACSszfEDXnLSV6ePPVHJ8p672Y2chnBuYj1eMQOiTg=s176-c-k-c0x00ffffff-no-rj-mo"
};

export default FeedVideoView;
