import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";
import { Checklist } from "../../interfaces/checklists";
import { useEffect, useState } from "react";
import ItemChecklist from "../../components/checklists/items";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'
import ModalChecklist from "../../components/checklists/modal";

function Checklists() {

  const [checklists, setChecklists] = useState<Checklist[]>([]);

  function loadChecklists() {
    return [
      {
        id: 1,
        description: "Trator John Deere 8R 370",
      },
      {
        id: 2,
        description: "Colheitadeira John Deere S790",
      },
      {
        id: 3,
        description: "Pulverizador John Deere M4025",
      },
      {
        id: 4,
        description: "Plantadeira John Deere 2122",
      }
    ]
  }

  useEffect(() => {
    const checklists = loadChecklists()
    setChecklists(checklists)
  }, [])

  function deleteChecklist(id: number) {
    const newChecklists = checklists.filter((checklist) => checklist.id !== id)
    setChecklists(newChecklists)
  }

  return (
    <Layout>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <Text fontSize={40} color="#377C2B" py={2}>
          Checklists
        </Text>
        <Divider orientation='horizontal' />
        <Box py={4}>
          <ModalChecklist checklists={checklists} setChecklists={setChecklists} />
        </Box>
        <Box overflowY="auto" height="100%">
          <TableContainer w={'150vh'}>
            <Table variant='simple' size={'sm'}>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Descrição</Th>
                  <Th w={'205px'}>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  checklists.map((checklist) => (
                    <ItemChecklist key={checklist.id} {...checklist} deleteChecklist={deleteChecklist} />
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Layout>
  );
}

export default Checklists;
