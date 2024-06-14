import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";
import { ListChecklist } from "../../interfaces/listChecklist";
import { useEffect, useState } from "react";
import ItemListChecklist from "../../components/listChecklist/items";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'
import ModalListChecklist from "../../components/listChecklist/modal";

function ListChecklists() {

  const [listChecklists, setListChecklists] = useState<ListChecklist[]>([]);

  function loadListChecklists() {
    return [
      {
        id: 1,
        description: "Roda",
      },
      {
        id: 2,
        description: "Colheitadeira",
      },
      {
        id: 3,
        description: "Parachoque",
      },
      {
        id: 4,
        description: "Janela",
      }
    ]
  }

  useEffect(() => {
    const listChecklists = loadListChecklists()
    setListChecklists(listChecklists)
  }, [])

  function deleteListChecklist(id: number) {
    const newListChecklists = listChecklists.filter((listChecklist) => listChecklist.id !== id)
    setListChecklists(newListChecklists)
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
          Itens de Checklist
        </Text>
        <Divider orientation='horizontal' />
        <Box py={4}>
          <ModalListChecklist ListChecklists={listChecklists} setListChecklists={setListChecklists} />
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
                  listChecklists.map((listChecklist) => (
                    <ItemListChecklist key={listChecklist.id} {...listChecklist} deleteListChecklist={deleteListChecklist} />
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

export default ListChecklists;
