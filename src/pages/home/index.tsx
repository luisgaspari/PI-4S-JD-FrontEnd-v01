import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Layout from "../../components/layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={"url(imagejohndeere.jpg)"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Sistema de Gerenciamento de Vistorias
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                <Link to="/equipments">Equipamentos</Link>
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                <Link to="/checklists">Checklists</Link>
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </Layout>
  );
}

export default Home;
