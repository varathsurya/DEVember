import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { AmaticSC_700Bold, AmaticSC_400Regular } from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";

import DayListItem from "../components/core/DayListItem";

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
  },
  column: {
    gap: 10,
    padding: 10,
  },
});
