import { Button, Stack } from "@chakra-ui/react";
import { Tr, Td } from '@chakra-ui/react'
import { Equipment } from "../../../interfaces/equipments";

interface ItemEquipmentProps {
    // id_equipment: number;
    // description: string;
    // model: string;
    // category: string;
    // checklist: string; 
    equipment: Equipment
    deleteEquipment(id: number): void
}

// function ItemEquipment({ id_equipment, description, model, category, checklist, deleteEquipment }: ItemEquipmentProps) {
function ItemEquipment({ equipment, deleteEquipment }: ItemEquipmentProps) {

    return (
        <Tr>
            <Td>{equipment.id_equipment}</Td>
            <Td>{equipment.description}</Td>
            <Td>{equipment.model}</Td>
            <Td>{equipment.category}</Td>
            <Td>{equipment.checklist}</Td>
            <Td>
                <Stack spacing={2} direction='row' justify='flex-end'>
                <Button width={'90px'} size={'sm'} colorScheme="blue">Editar</Button>
                <Button width={'90px'} size={'sm'} onClick={() => deleteEquipment(equipment.id_equipment)} colorScheme="red">Remover</Button>
                </Stack>
            </Td>
        </Tr>
    )
}

export default ItemEquipment;