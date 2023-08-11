import { Box, Button, FormLabel, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { imageupload } from '../Redux/imageupload/imageuploadaction'
import { useState } from 'react'

const ProfileImageUploader = () => {
  const [userimage, setUserimage] = useState("")
  const toast = useToast()
  const userdata = useSelector(store => store.usersignupreducer.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = JSON.parse(localStorage.getItem("pandaluserid"))
  const handleImage = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("image", userimage)
    console.log(formdata)
    dispatch(imageupload(userId, formdata))
    .then((res) => {
      if (res.payload.updated) {
        toast({
          position: "top",
          title: 'Profile image updated succesfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate("/login")
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
    <Box width={["90%","90%","50%","50%"]} margin="auto">
      <form className='form' onSubmit={(e) => handleImage(e)} encType="multipart/form-data">
        <FormLabel>Select a profile picture</FormLabel>
        <Input type="file" name="image" onChange={(e) => setUserimage(e.target.files[0])} />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  )
}

export default ProfileImageUploader
