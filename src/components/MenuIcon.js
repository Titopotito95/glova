import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export const MenuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} color={color} size={size ?? 24} />;
};
