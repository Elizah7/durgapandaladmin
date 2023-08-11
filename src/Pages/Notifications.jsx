import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/navbar'
import Welcomenote from '../Components/welcomenote'

const Notifications = () => {
  return (
    <Stack>
      <Welcomenote />
      <nav width="100%">
        <Navbar />
      </nav>
    </Stack>
  )
}

export default Notifications
