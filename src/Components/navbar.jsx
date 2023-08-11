import React from 'react'
import { Box, Flex, HStack, Image, Input, useDisclosure, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverFooter, ButtonGroup, PopoverHeader, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, } from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaRegUser, FaVideo } from "react-icons/fa"
import { BsSearch } from "react-icons/bs"
import { AiOutlinePicture } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from './Sidebar'
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let token = localStorage.getItem("pandaltoken") || null
  const btnRef = React.useRef()

  const navigate = useNavigate()
  const navbarmenu = [
    { name: "Home", link: "/" },
    { name: "Pictures", link: "/pictures" },
    { name: "Videos", link: "/videos" },
    { name: "Notifications", link: "/notifications" },
  ]
  const handleLogin = () => {
    navigate("/login")
  }
  const handleClick = () => {
    if (token) {
      localStorage.setItem("token", null)
    }
    else {
      navigate("/login")
    }
  }
  const notificationCount = 15
  return (<>
    <Flex justifyContent={{ base: "space-between", md: "space-between" }} marginTop={["-2%", "-2%", "-1%", "-1%"]} height={["40px", "40px", "120px", "120px"]} alignItems="center" width="100%" className='navbar background_color'>
      {/* <Flex width={["10%", "10%", "5%", "5%"]} marginLeft="2%" borderRadius="10px" backgroundColor="orange">
        <Image borderRadius="60px" src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-hindu-new-year-gudipada-red-chakra-png-image_6046424.jpg" />
      </Flex> */}

      <HStack display={["none", "none", "flex", "flex"]} width="60%"  justifyContent="space-between" alignItems="center" color="white">
        {/* {navbarmenu.map(ele => <Link key={ele.link} to={ele.link}><Box><h2>{ele.name}</h2></Box></Link>)} */}
        <Box as="button" p={8} rounded="md" boxShadow="md" className='topbar_box'>
          <h2>15</h2>
          <p>Users</p>
        </Box>
        <Box as="button"  p={8} rounded="md" boxShadow="md" className='topbar_box'>
          <h2>13</h2>
          <p>Images</p>
        </Box>
        <Box className="notification-box topbar_box" p={8} rounded="md" boxShadow="md"  >
          {/* Add notification indicator */}
          {notificationCount > 0 && <Box className="notification-indicator" />}
          <h2>{notificationCount}</h2>
          <p>Notifications</p>
        </Box>
        <Box>

        </Box>
      </HStack>
      <Flex display={{ base: "none", md: "flex" }} >

        <Popover
          // initialFocusRef={initialFocusRef}
          placement='bottom'
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <FaRegUser />
          </PopoverTrigger>
          <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
            <PopoverHeader pt={4} fontWeight='bold' border='0'>
              Your Account
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </PopoverBody>
            <PopoverFooter
              border='0'
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              pb={4}
            >
              <ButtonGroup size='sm'>
                <Button colorScheme='green' onClick={handleClick}>{token ? "Logout" : "Login"}</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>


      </Flex>

    </Flex>
    <Flex height="40px" backgroundColor="orange" width="100%" display={{ base: "flex", md: "none" }} alignItems="center" justifyContent="space-around" boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
      <Box>
        <Link to="/"><FaHome color="white" /></Link>
      </Box>
      <Box>
        <Link to="/pictures"><AiOutlinePicture color="white" /></Link>
      </Box>
      <Box>
        <Link to="/videos"><FaVideo color="white" /></Link>
      </Box>
      <Box>
        <GiHamburgerMenu onClick={onOpen} color="white" />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Sidebar />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  </>)
}

export default Navbar
