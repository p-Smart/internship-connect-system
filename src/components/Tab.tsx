import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface ITab {
  title: string;
  icon: IconType;
  iconColor?: string;
  showBadge?: boolean;
  badgeNumber?: number;
  active: boolean;
  onClick?: () => void;
}

const Tab: FC<ITab> = ({
  title,
  icon,
  showBadge,
  badgeNumber,
  active,
  iconColor,
  onClick
}) => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  return (
    <Button
      variant="unstyle"
      gap="10px"
      borderTop="2px solid"
      borderRadius="none"
      borderColor={
        active ? "primary.main" : isLight ? "blackAlpha.600" : "whiteAlpha.600"
      }
      p="7px 5px"
      alignItems="center"
      mx="auto"
      onClick={onClick}
    >
      <Box
        size={18}
        as={icon}
        color={
          iconColor ||
          (active
            ? isLight
              ? "black"
              : "white"
            : isLight
            ? "blackAlpha.600"
            : "whiteAlpha.600")
        }
      />
      <Text
        fontWeight="600"
        color={
          active
            ? isLight
              ? "black"
              : "white"
            : isLight
            ? "blackAlpha.600"
            : "whiteAlpha.600"
        }
      >
        {title}
      </Text>
      {showBadge ? (
        <Text
          w="20px"
          h="20px"
          fontSize=".8rem"
          fontWeight="600"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor="primary.main"
          color="white"
          borderRadius="50%"
        >
          {badgeNumber}
        </Text>
      ) : null}
    </Button>
  );
};

export default Tab;
