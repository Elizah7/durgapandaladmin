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
import { postvideoaction } from '../Redux/PostData/postimageaction';
import { getImagesAction, getvideoaction } from '../Redux/getdata/action';
import Loader from '../Components/Spinner';
import ImagesModel from '../Components/ImagesModel';



const VideoUploader = () => {

  const [video, setVideo] = useState("")
  const toast = useToast()
  console.log("video",video)
  const isLoading = useSelector(store => store.postvideosreducer.isLoading)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append('video', video);
    console.log(formData)
    dispatch(postvideoaction(formData))
      .then((res) => {
        if (res.payload.data) {
          toast({
            position: "top",
            title: 'video uploaded succesfully',
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
          console.log(res.payload.msg,res.payload.err)
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
        console.log(err)
      })

  }

  return (
    <Box width="100%" margin="auto" textAlign="center">
      <form className='form' encType="multipart/form-data" onSubmit={handleSubmit}>
        <FormLabel>Select a video</FormLabel>
        <Input type="file" name="video"  accept="video/*" required onChange={(e) => setVideo(e.target.files[0])} />
        <Button backgroundColor="orange" color="white" type="submit" marginTop="5%">{isLoading ? <Loader /> : "Submit"}</Button>
      </form>
    </Box>

  )
}
const VideosPage = () => {
  const dispatch = useDispatch()
  const videos = useSelector(store => store.getVideoDatareducer.data)
  console.log(videos)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    dispatch(getvideoaction());
  }, [dispatch]);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    onOpen();
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    onClose();
  };


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
        <Box width="100%" paddingTop="5%">
          <ModalJsx title="Add Videos" body={VideoUploader} />
        </Box>
        <main width="100%" >
          <Grid templateRows='repeat(auto)' className='main_grid'
          padding="2%"
            templateColumns={['repeat(4,1fr)', 'repeat(4,1fr)', 'repeat(4,1fr)', 'repeat(4,1fr)','repeat(5, 1fr)']} gap="1%">
             {videos && videos.data && videos.data.map((video) => (
                  <GridItem width="100%" height="100%" style={{ cursor: 'pointer' }}
                  onClick={() => openVideoModal(video)}><video key={video.id} width="100%"  style={{ marginBottom: '20px',height:"100%", objectFit:"cover"}}>
                    <source src={video.videourl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </GridItem>
                ))}
          </Grid>
        </main>
      </Box>
    </Box>
    <Modal isOpen={isOpen} onClose={closeVideoModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Video Player</ModalHeader>
          <ModalCloseButton  backgroundColor="red"/>
          <ModalBody>
            {selectedVideo && (
              <video controls width="100%" height="auto" style={{ marginBottom: '20px',height:"50vh", objectFit:"cover"}}>
                <source src={selectedVideo.videourl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
  </Stack>)
}

export default VideosPage
