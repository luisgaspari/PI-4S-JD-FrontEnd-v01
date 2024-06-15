import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Layout from "../../components/layout";
import { Equipment } from "../../interfaces/equipments";
import { useEffect, useState } from "react";
import ItemEquipment from "../../components/equipments/items";
import { Table, Thead, Tbody, Tr, Th, TableContainer, } from '@chakra-ui/react'
import ModalEquipment from "../../components/equipments/modal";
import api from "../../helpers/axios";

function Equipments() {

  const [equipments, setEquipments] = useState<Equipment[]>([]);

  // function loadEquipments() {
  //   return [
  //     {
  //       id: 1,
  //       description: "Trator John Deere 8R 370",
  //       model: "8R 370",
  //       category: "Trator",
  //       checklist: '01',
  //     },
  //     {
  //       id: 2,
  //       description: "Colheitadeira John Deere S790",
  //       model: "S790",
  //       category: "Colheitadeira",
  //       checklist: '02',
  //     },
  //     {
  //       id: 3,
  //       description: "Pulverizador John Deere M4025",
  //       model: "M4025",
  //       category: "Pulverizador",
  //       checklist: '03',
  //     },
  //     {
  //       id: 4,
  //       description: "Plantadeira John Deere 2122",
  //       model: "2122",
  //       category: "Plantadeira",
  //       checklist: '04',
  //     }
  //   ]
  // }

  async function loadEquipments() {
    const response = await api.get('/equipment', { withCredentials: true })
    if (response.status === 200) {
      setEquipments(response.data)
    }
  }

  useEffect(() => {
    // const equipments = loadEquipments()
    // setEquipments(equipments)
    loadEquipments()
  }, [])

  // function deleteEquipment(id: number) {
  //   const newEquipments = equipments.filter((equipment) => equipment.id !== id)
  //   setEquipments(newEquipments)
  // }

  function deleteEquipment(id: number) {
      api.delete(`/equipment/${id}`, { withCredentials: true })
          .then(response => {
              if (response.status === 204) {
                  loadEquipments
              } else {
                  alert('Erro ao deletar')
              }
          })
          .catch((error) => {
              console.log(error)
          })
  }
  return (
    <Layout>
      <Flex
        as="main"
        bg="white"
        align="center"
        justify="space-between"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <Text fontSize={40} color="#377C2B" py={2}>
          Equipamentos
        </Text>
        <Divider orientation='horizontal' />
        <Box py={4}>
          {/* <ModalEquipment equipments={equipments} setEquipments={setEquipments} /> */}
          <ModalEquipment loadEquipments={loadEquipments} />
        </Box>
        <Box overflowY="auto" height="100%">
          <TableContainer w={'150vh'}>
            <Table variant='simple' size={'sm'}>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Descrição</Th>
                  <Th>Modelo</Th>
                  <Th>Categoria</Th>
                  <Th>Checklist</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  equipments.map((equipment) => (
                    <ItemEquipment 
                      key={equipment.id_equipment} 
                      // {...equipment} 
                      equipment={equipment}
                      deleteEquipment={deleteEquipment} 
                    />
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

export default Equipments;
