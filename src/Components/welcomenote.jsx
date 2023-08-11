

import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Welcomenote = () => {
  return (
    <Box width="100%" height={["40px", "40px", "50px", "50px"]} display="flex" className='welcome_note' >
      <marquee width="100%" direction="left">
      <Text fontSize={["100%", "100%", "120%", "120%"]} color="white">Shree Jaigurudev Aadarsh Durga Pandal Gonapar Aapka Sahriday Swagat Avam Abhinandan Karta Hai</Text>
      </marquee>
    </Box>
  )
}

export default Welcomenote
