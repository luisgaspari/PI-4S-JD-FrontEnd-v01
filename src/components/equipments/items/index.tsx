import { Button } from "@chakra-ui/react";
import { Tr, Td } from '@chakra-ui/react'
import { Equipment } from "../../../interfaces/equipments";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

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
            <Td>{equipment.checklist?.id_checklist}</Td>
            <Td p={0}>
                <Button size={'sm'} colorScheme="blue">
                    <EditIcon fontSize={20} color={'white'} />
                </Button>
            </Td>
            <Td p={0}>
                <Button size={'sm'} onClick={() => deleteEquipment(equipment.id_equipment)} colorScheme="red">
                    <DeleteIcon fontSize={20} color={'white'} />
                </Button>
            </Td>
        </Tr>
    )
}

export default ItemEquipment;