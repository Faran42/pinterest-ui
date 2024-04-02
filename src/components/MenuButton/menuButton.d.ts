import { FontAwesome } from "@expo/vector-icons";

export type MenuButtonProps = {
  title: string;
  iconName: keyof typeof FontAwesome.glyphMap;
};


