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
import { ListChecklist } from "../../../interfaces/listChecklist"
import { useEffect, useRef, useState } from "react";

interface ModalListChecklistProps {
    ListChecklists: ListChecklist[]
    setListChecklists: (ListChecklists: ListChecklist[]) => void
}

function ModalListChecklist({ ListChecklists, setListChecklists }: ModalListChecklistProps) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [description, setDescription] = useState('')

    function addListChecklist() {
        if (ListChecklists.length > 0) {
            const lastId = ListChecklists[ListChecklists.length - 1].id
            const newListChecklist = { id: lastId + 1, description: description }
            setListChecklists([...ListChecklists, newListChecklist])
            onClose()
        }
    }

    const inputListChecklist = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setDescription('')
        if (inputListChecklist.current) inputListChecklist.current.focus()
    }, [])

    return (
        <>
            <Button size={"sm"} width='90px' colorScheme="green" onClick={onOpen}>Novo</Button>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Itens de Checklist</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl>
                            <FormLabel>Descrição</FormLabel>
                            <Input
                                ref={inputListChecklist}
                                type="text"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Stack spacing={2} direction='row' justify='flex-end'>
                            <Button size={"sm"} width='90px' onClick={addListChecklist} colorScheme="green">Salvar</Button>
                            <Button size={"sm"} width='90px' onClick={onClose}>Cancel</Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalListChecklist