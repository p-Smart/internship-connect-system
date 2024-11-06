import Logo from "@/components/Logo";
import { Flex } from "@chakra-ui/react";

const Topbar = () => {
  const nav = [
    {
      title: "Companies",
      router: "",
    },
    {
      title: "Interns",
      router: "",
    },
    {
      title: "About us",
      router: "",
    },
  ];

  return (
    <Flex>
      <Logo variant="light" />
      <Flex></Flex>
    </Flex>
  );
};

export default Topbar;
