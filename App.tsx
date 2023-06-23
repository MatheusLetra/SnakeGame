import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Game from "./src/components/Game";
import { Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" hidden={Platform.OS === "android"} />
        <Game />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}