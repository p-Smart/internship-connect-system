import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import Text from "./components/Text";
import Input from "./components/Input";
import Button from "./components/Button";
import palette from "./palette";
import Card from "./components/Card";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        background: props.colorMode === "light" ? "#F9FBFF" : "#020710",
      },
    }),
  },
  colors: palette,
  breakpoints: {
    xs: "0px",
    sm: "450px",
    md: "625px",
    lg: "991px",
    xl: "1200px",
    "2xl": "1440px",
  },
  fonts: {
    body: `"Inter", sans-serif`,
    heading: `"Inter", sans-serif`,
    mono: `"Inter", sans-serif`,
  },
  components: {
    Text,
    Button,
    Input,
    Divider: {
      baseStyle: (props: StyleFunctionProps) => ({
        borderColor:
          props.colorMode === "light" ? "blackAlpha.500" : "whiteAlpha.500",
        borderWidth: "1px",
      }),
    },
    Card,
  },
} as ThemeConfig);

export default theme;
