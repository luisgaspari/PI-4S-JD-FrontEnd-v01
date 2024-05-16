import { Button, Card, CardBody, HStack, Text } from "@chakra-ui/react";

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
            <Card size={'sm'} w={'150vh'} bg={'gray.50'}>
                <HStack>
                    <CardBody>
                        <Text fontSize='lg'>{id} - {description} - {model} - {category} - {checklist}</Text>
                    </CardBody>
                    <Button size={'sm'} colorScheme="green">Editar</Button>
                    <Button size={'sm'} onClick={() => deleteEquipment(id)} colorScheme="red">Remover</Button>
                </HStack>
            </Card>
    )
}

export default ItemEquipment;