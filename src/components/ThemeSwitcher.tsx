import { Box, Flex, Icon, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      onClick={toggleColorMode}
      cursor="pointer"
      position="relative"
      alignItems="center"
      w="80px"
      h="40px"
      bg={colorMode === "dark" ? "#224049" : "supportive"}
      borderRadius="full"
      transition="background-color 0.3s ease"
    >
      <Box
        position="absolute"
        top="50%"
        left={colorMode === "dark" ? "calc(100% - 32px - 5px)" : "5px"}
        transform="translateY(-50%)"
        width="32px"
        height="32px"
        bgColor={colorMode === "dark" ? "#020710" : "#F9FBFF"}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 0 5px rgba(0, 0, 0, 0.2)"
        transition="all 0.3s ease"
      >
        <Icon
          as={colorMode === "dark" ? MdOutlineDarkMode : MdOutlineLightMode}
          boxSize={4}
          color={colorMode === "dark" ? "white" : "black"}
        />
      </Box>
    </Flex>
  );
};

export default ThemeSwitcher;
