import { Divider, Flex, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";
import { Equipment } from "../../interfaces/equipments";
import { useEffect, useState } from "react";
import FormEquipment from "../../components/equipments/form";
import ItemEquipment from "../../components/equipments/items";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

function Equipments() {

  const [equipments, setEquipments] = useState<Equipment[]>([]);

  function loadEquipments() {
    return [
      {
        id: 1,
        description: "Trator John Deere 8R 370",
        model: "8R 370",
        category: "Trator",
        checklist: '01',
      },
      {
        id: 2,
        description: "Colheitadeira John Deere S790",
        model: "S790",
        category: "Colheitadeira",
        checklist: '02',
      },
      {
        id: 3,
        description: "Pulverizador John Deere M4025",
        model: "M4025",
        category: "Pulverizador",
        checklist: '03',
      },
      {
        id: 4,
        description: "Plantadeira John Deere 2122",
        model: "2122",
        category: "Plantadeira",
        checklist: '04',
      }
    ]
  }

  useEffect(() => {
    const equipments = loadEquipments()
    setEquipments(equipments)
  }, [])

  function deleteEquipment(id: number) {
    const newEquipments = equipments.filter((equipment) => equipment.id !== id)
    setEquipments(newEquipments)
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
          Equipamentos
        </Text>
        <Divider orientation='horizontal' />
        <FormEquipment equipments={equipments} setEquipments={setEquipments} />
        <Divider orientation='horizontal' />
        <TableContainer w={'150vh'}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Descrição</Th>
                        <Th>Modelo</Th>
                        <Th>Categoria</Th>
                        <Th>Checklist</Th>
                        <Th>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                { 
                  equipments.map((equipment) => (
                    <ItemEquipment key={equipment.id} {...equipment} deleteEquipment={deleteEquipment} />
                  ))
                }  
                </Tbody>
            </Table>
        </TableContainer>
      </Flex>
    </Layout>
  );
}

export default Equipments;
