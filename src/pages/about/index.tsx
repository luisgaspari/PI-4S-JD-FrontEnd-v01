import { Flex, Text, Box, Stack, Heading, Center, Container, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layout";

function About() {
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
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Sobre</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Informações sobre o projeto e o desenvolvedor.
                    </Text>
                    <Center py={6}>
                        <Box
                            maxW={'520px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'}>
                            <Heading fontSize={'2xl'} fontFamily={'body'}>
                                Grupo 2
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} mb={4}>
                                Diego Neves da Cruz<br />
                                Michael Douglas Ramos dos Santos<br />
                                Lucas Felipe de Jesus <br />
                                Luis Antonio Gaspari <br />
                                Wendel Emanuel dos Santos
                            </Text>
                            <Text
                                textAlign={'center'}
                                color={useColorModeValue('gray.700', 'gray.400')}
                                px={3}>
                                <Text as='b'>Fatec Indaiatuba</Text> <br />
                                Análise e Desenvolvimento de Sistemas <br />
                                4º Semestre - 2024
                            </Text>
                        </Box>
                    </Center>
                </Stack>
            </Box>
      </Flex>
    </Layout>
  );
}

export default About;


