import { cardAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  StyleFunctionProps,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle((props: StyleFunctionProps) => ({
  container: {
    backgroundColor: props.colorMode === "light" ? "#FFFFFF" : "#2A2C38",
    boxShadow:
      props.colorMode === "light"
        ? "0 0 10px rgb(0,0,0,.125)"
        : "0 0 10px rgb(255,255,255,.125)",
  },
}));

const sizes = {};

const Card = defineMultiStyleConfig({ baseStyle, sizes });

export default Card;
