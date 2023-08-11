import React from 'react'
import { Input, Button, Spinner, useToast, Box, FormLabel, } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { forgot_password_action, get_valid_user_action } from '../Redux/ForgotPassword/forgotpasswordaction'

const EnterNewPasswordPage = () => {
    const init = {
        password: "",
    }
    const { id, token } = useParams()
    console.log(id,token)
    const [data, setData] = useState(init)
    const toast = useToast()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_valid_user_action(id, token))
            .then((res) => {
                console.log(res)
                if (res.payload.data) {
                    toast({
                        position: "top",
                        title: 'User validated enter your new password',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                } else {
                    toast({
                        position: "top",
                        title: `${res.payload.msg.name} please enter your email again`,
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
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const navigate = useNavigate()

    const onSubmit = (e, data) => {
        e.preventDefault()
        dispatch(forgot_password_action(id, token, data))
            .then((res) => {
                if (res.payload.data) {
                    toast({
                        position: "top",
                        title: 'password changed succesfully',
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
        setData(init)
    }

    return (<Box width={["95%", "95%", "40%", "40%"]} height={["50vh", "50vh", "50vh", "50vh"]} margin="auto" marginTop="5%" className='border-box border' textAlign="center">
        <Box width="100%" className='formdiv'>
            <form onSubmit={(e) => onSubmit(e, data)} encType='multipart/form-data'>
                <FormLabel>Enter New Password</FormLabel>
                <Input name="password" required value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your new password" />
                <Button mt={4} backgroundColor="rgb(255, 106, 0)" color="white" type='submit' marginTop="3%">
                    Enter
                </Button>
            </form>
        </Box>
    </Box>
    )
}

export default EnterNewPasswordPage
