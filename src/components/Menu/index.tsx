import { forwardRef } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/theme";
import { MenuButton } from "../MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Comece a criar agora</Text>
          <FontAwesome
            name="close"
            size={24}
            color={theme.colors.white}
            onPress={onClose}
          />
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" iconName="home" />
          <MenuButton title="Colagem" iconName="paste" />
          <MenuButton title="Pasta" iconName="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});
