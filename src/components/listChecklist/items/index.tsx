import { Button, Stack } from "@chakra-ui/react";
import {
  Tr,
  Td,
} from '@chakra-ui/react'

interface ItemListChecklistProps {
    id: number;
    description: string;
    /*model: string;
    category: string;
    ListChecklist: string; */
    deleteListChecklist(id: number): void
}

function ItemListChecklist({ id, description,/*, model, category, ListChecklist,*/deleteListChecklist }: ItemListChecklistProps) {
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{description}</Td>
            <Td>
                <Stack spacing={2} direction='row' justify='flex-end'>
                <Button width={'90px'} size={'sm'} colorScheme="blue">Editar</Button>
                <Button width={'90px'} size={'sm'} onClick={() => deleteListChecklist(id)} colorScheme="red">Remover</Button>
                </Stack>
            </Td>
        </Tr>
    )
}

export default ItemListChecklist;