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

  const data = [

    { image: "https://wallpapercave.com/wp/wp10023692.jpg", caption: "Mata Shailputri" },
    { image: "https://e1.pxfuel.com/desktop-wallpaper/766/966/desktop-wallpaper-goddess-brahmacharini-maa-shailputri.jpg", caption: "Mata Bramhacharini" },
    { image: "https://wallpapercave.com/dwp1x/wp10074590.png", caption: "Mata Chandraghanta" },
    { image: "https://i0.wp.com/wordzz.com/wp-content/uploads/durga-maa/navdurga/kushmanda/done/Maa-Kushmanda.jpg?resize=1068%2C785&ssl=1", caption: "Mata Kushmandha" },
    { image: "https://www.bhagwankiphoto.com/wp-content/uploads/2021/09/Spiritual-Goddess-Skandamata-Images.jpg", caption: "Mata Skandmata" },
    { image: "https://www.jagranimages.com/images/newimg/22102020/22_10_2020-maa-katyayani-katha_20927001.jpg", caption: "Mata Katyani" },
    { image: "https://images.pexels.com/photos/12994378/pexels-photo-12994378.jpeg?cs=srgb&dl=pexels-kolkatar-chobiwala-12994378.jpg&fm=jpg", caption: "Mata Kalratri" },
    { image: "https://static.india.com/wp-content/uploads/2023/03/Maa-Mahagauri-1.jpg?impolicy=Medium_Resize&w=1200&h=800", caption: "Mata Mahagauri" },
    { image: "https://images.herzindagi.info/image/2021/Oct/siddhidatri-devi-ki-aarti.jpg", caption: "Mata Sidhidatri" },

  ]
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
