import { Button } from "@chakra-ui/react";
import {
  Tr,
  Td,
} from '@chakra-ui/react'

interface ItemEquipmentProps {
    id: number;
    description: string;
    model: string;
    category: string;
    checklist: string; 
    deleteEquipment(id: number): void
}

function ItemEquipment({ id, description, model, category, checklist, deleteEquipment }: ItemEquipmentProps) {
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{description}</Td>
            <Td>{model}</Td>
            <Td>{category}</Td>
            <Td>{checklist}</Td>
            <Td>
                <Button width={'90px'} px={5} size={'sm'} colorScheme="green">Editar</Button>
                <Button width={'90px'} px={5} size={'sm'} onClick={() => deleteEquipment(id)} colorScheme="red">Remover</Button>
            </Td>
        </Tr>
    )
}

export default ItemEquipment;