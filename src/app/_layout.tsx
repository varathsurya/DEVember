import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
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
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
}
