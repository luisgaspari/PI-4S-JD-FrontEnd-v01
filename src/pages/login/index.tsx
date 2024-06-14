import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../helpers/axios"

function Login() {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    function handleLogin() {
        api.post('/authentication/login', userData, { withCredentials: true })
            .then((resposta) => {
                if (resposta.status === 200) {
                    // alert('Login efetuado com sucesso!')
                    localStorage.setItem('login', 'true')
                    navigate("/");
                } else {
                    alert('Erro ao Entrar!')
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
                        <Heading fontSize={"4xl"}>Entre com seu Login</Heading>
                    </Box>
                    <Stack spacing={4} py={6}>
                        <FormControl id="email">
                            <FormLabel>E-mail</FormLabel>
                            <Input type="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button bg={"blue.400"} color={"white"} _hover={{bg: "blue.500"}} onClick={handleLogin}>Entrar</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );

}

export default Login;