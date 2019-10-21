import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const IconButton = ({
  iconName,
  size = 24,
  color = "#000",
  onPress = () => null
}) => {
  return (
    <TouchableOpacity style={styles.iconButtonContainer} onPress={onPress}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
