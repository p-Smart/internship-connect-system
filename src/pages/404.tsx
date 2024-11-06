import { Button, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  return (
    <Stack
      w="100%"
      h="100vh"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
    >
      <Stack gap="20px" alignItems="center" m="auto" maxW="500px">
        <Text variant="h1" fontWeight="800" fontSize="7rem">
          404
        </Text>
        <Text variant="h3" fontWeight="800">
          PAGE NOT FOUND
        </Text>
        <Text textAlign="center">
          The page you are looking for might have been removed, had its name
          changed or temporarily unavailable.
        </Text>
        <Button px="40px" as={Link} href="/">
          Home
        </Button>
      </Stack>
    </Stack>
  );
};

export default ErrorPage;
