import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Stack,
} from "@chakra-ui/react";
import { PostEquipment } from "../../../interfaces/equipments"
import { useEffect, useRef, useState } from "react";
import api from "../../../helpers/axios"

interface ModalEquipmentProps {
    // equipments: Equipment[]
    // setEquipments: (equipments: Equipment[]) => void
    loadEquipments(): void
}

// function ModalEquipment({ equipments, setEquipments }: ModalEquipmentProps) {
function ModalEquipment({ loadEquipments }: ModalEquipmentProps) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [description, setDescription] = useState('')
    const [model, setModel] = useState('')
    const [category, setCategory] = useState('')
    const [checklist, setChecklist] = useState('')

    // function addEquipment() {
    //     if (equipments.length > 0) {
    //         const lastId = equipments[equipments.length - 1].id
    //         const newEquipment = { id: lastId + 1, description: description, model: model, category: category, checklist: checklist }
    //         setEquipments([...equipments, newEquipment])
    //         onClose()
    //     }
    // }

    function addEquipment() {
        if (description != '') {
            const newEquipment: PostEquipment = { description: description, model: model, category: category, checklist: checklist }
            api.post('/equipment', newEquipment, { withCredentials: true })
                .then(() => {
                    setDescription('')
                    setModel('')
                    setCategory('')
                    setChecklist('')
                    loadEquipments()
                    onClose()
                })
        }
    }

    const inputEquipment = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        setDescription('')
        setModel('')
        setCategory('')
        setChecklist('')
        if (inputEquipment.current) inputEquipment.current.focus()
    }, [])

    return (
        <>
            <Button size={"sm"} width='90px' colorScheme="green" onClick={onOpen}>Novo</Button>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Equipamento</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl>
                            <FormLabel>Descrição</FormLabel>
                            <Input
                                ref={inputEquipment}
                                type="text"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Modelo</FormLabel>
                            <Input
                                type="text"
                                value={model}
                                onChange={(event) => setModel(event.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Categoria</FormLabel>
                            <Input
                                type="text"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Checklist</FormLabel>
                            <Input
                                type="number"
                                value={checklist}
                                onChange={(event) => setChecklist(event.target.value)}
                            />
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Stack spacing={2} direction='row' justify='flex-end'>
                            <Button size={"sm"} width='90px' onClick={addEquipment} colorScheme="green">Salvar</Button>
                            <Button size={"sm"} width='90px' onClick={onClose}>Cancel</Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalEquipment