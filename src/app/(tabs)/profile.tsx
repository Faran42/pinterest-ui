import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thanks for watching</Text>
      <Text style={styles.text}>{'\n'}d=(^_^)=b</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
  },

  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
