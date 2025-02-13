import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ConcertScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Concert Page</Text>
    </View>
  );
};

export default ConcertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
