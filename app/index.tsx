import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

/**
 * Displays a simple home screen with a themed "Hello World" message.
 *
 * Renders a React Native view containing a single themed text element.
 */
export default function HomeScreen() {
  return (
    <View>
      <ThemedText>Hello World</ThemedText>
    </View>
  );
}
