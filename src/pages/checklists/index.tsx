import { Flex, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";

function Checklists() {
  return (
    <Layout>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <Text fontSize={100} color="gray.300">
          Checklist
        </Text>
      </Flex>
    </Layout>
  );
}

export default Checklists;
