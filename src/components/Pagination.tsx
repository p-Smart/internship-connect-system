import { Button, Flex, FlexProps, Text, useColorMode } from "@chakra-ui/react";
import { FC, useEffect } from "react";

interface IPagination {
  page: number;
  setPage: (pg: number) => void;
  totalPages: number;
}

const Pagination: FC<IPagination & FlexProps> = ({
  page,
  setPage,
  totalPages,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <Flex
      justifyContent="space-between"
      sx={{ "& button": { px: "40px", w: { xs: "100%", md: "unset" } } }}
      alignItems="center"
      gap="20px"
      flexDir={{ xs: "column", md: "row" }}
      {...rest}
    >
      <Button
        visibility={page === 1 ? "hidden" : "visible"}
        onClick={() => page !== 1 && setPage(page - 1)}
      >
        Previous
      </Button>
      <Text
        color={isLight ? "blackAlpha.600" : "whiteAlpha.600"}
        fontWeight="700"
        fontSize=".9rem"
      >
        {page}/{totalPages}
      </Text>
      <Button
        visibility={page === totalPages ? "hidden" : "visible"}
        onClick={() => page !== totalPages && setPage(page + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
