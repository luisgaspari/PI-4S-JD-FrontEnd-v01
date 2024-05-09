import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { Logo02 as Logo } from "../logo";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box py={6}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.400", "gray.600"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.400", "gray.600"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo w={100} />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2024 John Deere. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
