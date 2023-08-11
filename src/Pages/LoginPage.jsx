import { FormControl, Input, Button, Spinner, useToast, Box, FormLabel, Heading, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { userlogindata } from '../Redux/UserLogin/userloginaction'
const LoginPage = () => {
  const init = {
    email: "",
    password: "",
  }
  const { user, loginWithRedirect } = useAuth0();
  const [data, setData] = useState(init)
  const toast = useToast()
  let userdata = useSelector(store => store.Loginreducer.token)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }


  // let tokendata = JSON.parse(localStorage.getItem("token")) || []
  // let userId = JSON.parse(localStorage.getItem("userid")) || ""

  const navigate = useNavigate()
  const onSubmit = (e, data) => {
    e.preventDefault()
    dispatch(userlogindata(data))
      .then((res) => {
        if (res.payload.token) {
          toast({
            position: "top",
            title: 'Login succesfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          localStorage.setItem("pandaltoken", JSON.stringify(res.payload.token))
          setData(init)
          navigate("/")
        } else {
          toast({
            position: "top",
            title: res.payload.msg,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          setData(init)
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
        setData(init)

      })
  }

  return (<Box width={["95%", "95%", "40%", "40%"]} height={["60vh", "60vh", "50vh", "70vh"]} margin="auto" marginTop="5%" className='border-box border' textAlign="center">
    {/* <Box width="100%" height="10%" className='background_color'></Box> */}
    <Heading as="h1" fontSize="140%">Login here please</Heading>
    <Box  width="100%" className='formdiv'>
      <form onSubmit={(e) => onSubmit(e, data)} encType='multipart/form-data'>
        <FormLabel>Email</FormLabel>
        <Input name="email" required value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
        <FormLabel>Pasword</FormLabel>
        <Input name="password" required value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />
        <Button mt={4} backgroundColor="rgb(255, 106, 0)" color="white" type='submit' marginTop="3%">
          Submit
        </Button>
      </form>
      <Box marginTop="3%">
      <Link to="/forgot_password"><Text color="blue">Forgot Password</Text></Link>
      </Box>
  
    </Box>
    {/* <Box width="100%" height="10%" className='background_color'></Box> */}
  </Box>
  )

}
export { LoginPage }