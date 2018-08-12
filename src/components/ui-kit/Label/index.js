import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const Label = props => (
  <Text
    {...props}
    style={[
      props.style,
      {
        fontFamily: `roboto-${props.weight}`,
        color: props.color,
        fontSize: props.size
      }
    ]}
  />
);

Label.propTypes = {
  weight: PropTypes.oneOf(["regular", "bold", "medium"]),
  color: PropTypes.string,
  size: PropTypes.number
};

Label.defaultProps = {
  weight: "regular",
  color: "#000",
  size: 16
};

export default Label;
