import React from 'react'
import { FormControl, Input, Button, Spinner, useToast, Box, FormLabel, Heading, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { userlogindata } from '../Redux/UserLogin/userloginaction'
import { forgot_password_action } from '../Redux/ForgotPassword/forgotpasswordaction'
const ForgotPasswordPage = () => {
    const init = {
        email: "",
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


    const navigate = useNavigate()
    const onSubmit = (e, data) => {
        e.preventDefault()
        dispatch(forgot_password_action(data))
            .then((res) => {
                console.log(res)
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

    return (<Box width={["95%", "95%", "40%", "40%"]} height={["50vh", "50vh", "50vh", "50vh"]} margin="auto" marginTop="5%" className='border-box border' textAlign="center">
        <Box width="100%" className='formdiv'>
            <form onSubmit={(e) => onSubmit(e, data)} encType='multipart/form-data'>
                <FormLabel>Enter your email</FormLabel>
                <Input name="email" required value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
                <Button mt={4} backgroundColor="rgb(255, 106, 0)" color="white" type='submit' marginTop="3%">
                    Send
                </Button>
            </form>
        </Box>
    </Box>
    )
}

export default ForgotPasswordPage
