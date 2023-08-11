import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BsImage } from 'react-icons/bs'
import { FaHome, FaUser, FaVideo } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import getsingleuseraction from '../Redux/getsingleuser/getsingleuseraction'
import PaymentComponent from './MakePayment'

const Sidebar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getsingleuseraction())
            .then(res => console.log(res))

    }, [])
    const singleuser = useSelector(store => store.getsingleuserreducer.userdata)
    /* Start client-defined Callback Handler Functions */


    return (
        <Box width="100%" className='background_color'>
            <Box width="100%" textAlign="center">
                <Box width="100px" margin="auto" height="100px" >
                    <Image borderRadius="50%" width="100%" height="100%" objectFit="fill" src={singleuser && singleuser.data && singleuser.data.image} />
                </Box>

                <Box>
                    <Text>{singleuser && singleuser.data && singleuser.data.name}</Text>
                </Box>
            </Box>
            <Link to="/" className="navigation">
                <FaHome />
                <Text>Dashboard</Text>
            </Link>
            <Link to="/users" className="navigation">
                <FaUser />
                <Text>User Management</Text>
            </Link>
            <Link to="/pictures" className="navigation">
                <BsImage />
                <Text>Image Management</Text>
            </Link>
            <Link to="/videos" className="navigation">
                <FaVideo />
                <Text>Video Management</Text>
            </Link>
            <Link to="/chatbot" className="navigation">
                <FaHome />
                <Text>ChatBot</Text>
            </Link>
            <Box>
                <PaymentComponent/>
            </Box>
        </Box>
    )
}

export default Sidebar
