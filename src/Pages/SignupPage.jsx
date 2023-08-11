import { FormControl, FormErrorMessage, Checkbox, Input, Select, Button, Spinner, useToast, Box, FormLabel, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import usersignupaction from "../Redux/UserSignup/usersignupaction"
import { Link, useNavigate } from 'react-router-dom'


const SignupPage = () => {
  const init = {
    email: "",
    password: "",
    name: "",
    phone_number: "",
    role: "",
    image: "",
    gender:"",
  }

  const [data, setData] = useState(init)

  const toast = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(usersignupaction(data))
      .then((res) => {
        if (res.payload.user) {
          toast({
            position: "top",
            title: 'Account created succesfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          localStorage.setItem("pandaluserid", JSON.stringify(res.payload.user._id))
          navigate("/profilepicture")
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
    setData(init)
  }


  // if(isloading){
  //   return <form className='form'>
  //       <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' margin="auto"/>

  //   </form>
  // }

  return (<Box width={["95%", "95%", "40%", "40%"]} margin="auto" marginTop={["15%", "15%", "5%", "5%"]} padding="2%" textAlign="center">
    <Box>
      <Heading as="h1" fontSize="140%">Create Account Here</Heading>
      <form className='form' onSubmit={(e) => onSubmit(e)}>

        <FormLabel>Name</FormLabel>
        <Input name='name' required value={data.name} onChange={handleChange} className='input' type='text' placeholder="Enter your name" />
        <FormLabel>Email</FormLabel>
        <Input name="email" required value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
        <FormLabel>Phone Number</FormLabel>
        <Input name="phone_number" required value={data.phone_number} onChange={handleChange} className='input' type='number' placeholder="Enter your phone number" />
        <FormLabel>Password</FormLabel>
        <Input name="password" required value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />
        <FormLabel>Gender</FormLabel>
        <select onChange={handleChange} name="gender" required>
           <option value="male">Male</option>
           <option value="female">Female</option>
        </select>
        <Button colorScheme='teal' type='submit' marginTop="3%">
          Submit
        </Button>
        <Box className='divlogin' marginTop="3%">
          <p>Already a user <Link to="/login" color='navy-blue'>Login here</Link></p>
        </Box>
      </form>
    </Box>

  </Box>
  )

}
export { SignupPage }