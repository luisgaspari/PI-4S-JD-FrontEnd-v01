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
import { Checklist } from "../../../interfaces/checklists"
import { useEffect, useRef, useState } from "react";

interface ModalChecklistProps {
    checklists: Checklist[]
    setChecklists: (checklists: Checklist[]) => void
}

function ModalChecklist({ checklists, setChecklists }: ModalChecklistProps) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [description, setDescription] = useState('')

    function addChecklist() {
        if (checklists.length > 0) {
            const lastId = checklists[checklists.length - 1].id
            const newChecklist = { id: lastId + 1, description: description }
            setChecklists([...checklists, newChecklist])
            onClose()
        }
    }

    const inputChecklist = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setDescription('')
        if (inputChecklist.current) inputChecklist.current.focus()
    }, [])

    return (
        <>
            <Button size={"sm"} width='90px' colorScheme="green" onClick={onOpen}>Novo</Button>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Checklist</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl>
                            <FormLabel>Descrição</FormLabel>
                            <Input
                                ref={inputChecklist}
                                type="text"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Stack spacing={2} direction='row' justify='flex-end'>
                            <Button size={"sm"} width='90px' onClick={addChecklist} colorScheme="green">Salvar</Button>
                            <Button size={"sm"} width='90px' onClick={onClose}>Cancel</Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalChecklist