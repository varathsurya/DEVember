import { StyleSheet, Text, View } from "react-native";
import React from "react";

type DayListItem = {
    day: number;
}

const DayListItem = ({ day }: DayListItem) => {
  return (
    <View key={day} style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily:'AmaticBold'
  },
});
