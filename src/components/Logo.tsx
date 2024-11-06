import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface ILogo {
  variant: "light" | "dark";
  size?: number;
}

const Logo: FC<ILogo> = (props) => {
  return (
    <Box
      as="img"
      src={
        props.variant === "light"
          ? "/assets/images/logos/logo.png"
          : props.variant === "dark"
          ? "/assets/images/logos/logo.png"
          : ""
      }
      objectFit="contain"
      w={{ xs: 456 / 1.9 + "px", sm: 456 / 1.7 + "px", md: 456 / 1.5 + "px" }}
      h={{ xs: 116 / 1.9 + "px", sms: 116 / 1.7 + "px", md: 116 / 1.5 + "px" }}
    />
  );
};

export default Logo;
