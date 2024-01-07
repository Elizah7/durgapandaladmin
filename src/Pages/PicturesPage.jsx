import {
  Box, Image, Stack, Flex, Text, Heading, FormLabel, Input, Button, useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Grid,
  GridItem,

} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Components/navbar'
import Welcomenote from '../Components/welcomenote';
import Sidebar from '../Components/Sidebar';
import ModalJsx from '../Components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import postimageaction from '../Redux/PostData/postimageaction';
import { getImagesAction } from '../Redux/getdata/action';
import Loader from '../Components/Spinner';
import ImagesModel from '../Components/ImagesModel';



const ImageUploader = () => {

  const [image, setImage] = useState("")
  const toast = useToast()
  // console.log(image)
  const isLoading = useSelector(store => store.postImagesReducer.isLoading)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append('image', image);
    console.log(formData)
    dispatch(postimageaction(formData))
      .then((res) => {
        if (res.payload.data) {
          toast({
            position: "top",
            title: 'Image uploaded succesfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        } else {
          toast({
            position: "top",
            title: res.payload.msg,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      })
      .catch((err) => {
        toast({
          position: "top",
          title: err,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

      })

  }

  return (
    <Box width="100%" margin="auto" textAlign="center">
      <form className='form' encType="multipart/form-data" onSubmit={handleSubmit}>
        <FormLabel>Select a picture</FormLabel>
        <Input type="file" name="image" required onChange={(e) => setImage(e.target.files[0])} />
        <Button backgroundColor="orange" color="white" type="submit" marginTop="5%">{isLoading ? <Loader /> : "Submit"}</Button>
      </form>
    </Box>

  )
}
const PicturesPage = () => {
  const dispatch = useDispatch()
  const images = useSelector(store => store.getImageDatareducer.data)
  console.log(images && images)
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    dispatch(getImagesAction())
  }, [])

  let newdata = new Array(200).fill(-1)
  let rand = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')'
  return (<Stack>
    <Welcomenote />
    <Box width="100%" display="flex" justifyContent="center" columnGap="1%">
      <Box width="20%" display={["none", "none", "none", "block"]} className='border-box'>
        <Sidebar />
      </Box>
      <Box width={["100%", "100%", "100%", "80%"]} paddingTop="1%">
        <nav width="100%">
          <Navbar />
        </nav>
        <Box width="100%" paddingTop="5%" >
          <ModalJsx title="Add Pictures" body={ImageUploader} />
        </Box>
        <main width="100%">
          <Grid templateRows='repeat(auto)' className='main_grid'
            templateColumns={['repeat(4,1fr)', 'repeat(4,1fr)', 'repeat(4,1fr)', 'repeat(4,1fr)','repeat(5, 1fr)']} gap="1%">
            {
              images && images.data && images.data.length > 0 && images.data.map(ele=><GridItem><ImagesModel {...ele}/></GridItem>)
                
            }
          </Grid>
        </main>
      </Box>
    </Box>
  </Stack>)
}

export default PicturesPage
