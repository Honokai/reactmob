import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const AppButton = ({ onPress, title, backgroundColor, width}) => (
    <TouchableOpacity onPress={onPress} style={[
        styles.appButtonContainer,backgroundColor && { backgroundColor }, 
        width == 'big' && { width: 300 },width == 'med' && { width: 250 } ]} >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
      marginTop: 10,
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: 200,
      alignSelf: 'center',
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });