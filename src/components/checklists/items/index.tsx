import { Button, Stack } from "@chakra-ui/react";
import {
  Tr,
  Td,
} from '@chakra-ui/react'

interface ItemChecklistProps {
    id: number;
    description: string;
    deleteChecklist(id: number): void
}

function ItemChecklist({ id, description, deleteChecklist }: ItemChecklistProps) {
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{description}</Td>
            <Td>
                <Stack spacing={2} direction='row' justify='flex-end'>
                <Button width={'90px'} size={'sm'} colorScheme="blue">Editar</Button>
                <Button width={'90px'} size={'sm'} onClick={() => deleteChecklist(id)} colorScheme="red">Remover</Button>
                </Stack>
            </Td>
        </Tr>
    )
}

export default ItemChecklist;