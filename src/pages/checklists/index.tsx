import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";

function Checklists() {
  return (
    <Layout>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Checklists</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Projeto Interdisciplinar de Programação Web
          </Text>
        </Stack>
      </Box>
    </Layout>
  );
}

export default Checklists;
