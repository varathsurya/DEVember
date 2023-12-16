import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Animated Splash Screen 
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4 SplashScreen" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day4/animation" asChild>
        <Button title="go to animation" />
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title="go to splash screen animation" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
