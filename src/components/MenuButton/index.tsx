import { Pressable, Text } from "react-native";
import { MenuButtonProps } from "./menuButton";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";

export function MenuButton({ title, iconName }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={iconName}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
