import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
  } from '@chakra-ui/react'

const ModalJsx = (props) => {
    const {title,body} = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button  backgroundColor="orange"  onClick={onOpen}>{title}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
            {body()}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalJsx
