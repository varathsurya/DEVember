import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";
import { ScrollView } from "react-native-gesture-handler";


const MarkdownDisplay = ({children} : PropsWithChildren) => {
  return (
    <ScrollView  style={styles.page} contentInsetAdjustmentBehavior="automatic">
        <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;

const markdownStyles = StyleSheet.create({
  heading1: {
    color: "#212020",
    fontFamily: "InterBlack",
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    borderRadius:10
  },
});
