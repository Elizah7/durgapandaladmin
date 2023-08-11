import React from 'react'
import {
    Image,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import ImageLoader from './ImageLoader'
const ImagesModel = ({ _id, image}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (<Box onClick={onOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton/>
                <ModalBody textAlign="center" marginTop="10%" width="100%">
                    <Image src={image} width="100%" margin="auto"/>
                </ModalBody>
            </ModalContent>
        </Modal>
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height={["100px","110px","120px","150px","200px"]}>
               {image ? <Image src={image} width="100%" height="100%" objectFit="cover"/> : <ImageLoader/>}  
        </Box>
    </Box>
    )
}

export default ImagesModel
