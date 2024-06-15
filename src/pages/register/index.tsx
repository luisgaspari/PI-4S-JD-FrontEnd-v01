import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../helpers/axios"
import Alertar from "../../components/alert/app";

function Register() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    function handleRegister() {
        api.post('/authentication/Register', userData, { withCredentials: true })
            .then((resposta) => {
                if (resposta.status === 200) {
                    // alert('Register efetuado com sucesso!')
                    //Alertar()
                    localStorage.setItem('Register', 'true')
                    navigate("/");
                } else {
                    alert('Erro ao registrar!')
                }
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return (
        <Flex 
            minH={"100vh"} 
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
            backgroundImage={"url(imagejohndeere.jpg)"}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
        >
            <Stack spacing={2} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Box p={2}>
                        <Heading fontSize={"4xl"}>Cadastre-se</Heading>
                    </Box>
                    <Stack spacing={4} py={6}>
                        <FormControl id="name">
                            <FormLabel>Nome</FormLabel>
                            <Input type="name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>E-mail</FormLabel>
                            <Input type="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button bg={"blue.400"} color={"white"} _hover={{bg: "blue.500"}} onClick={handleRegister}>Cadastrar</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );

}

export default Register;