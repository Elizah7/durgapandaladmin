

import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const MarqueeInfinite = (props) => {
 console.log(props.image)
  return (
    <marquee width="10%" direction="left" border="1px solid red">
      <Box height={["40px", "40px", "50px", "50px"]} width="100%" display="flex" className='welcome_note' >
        <Image width="100%" src={props.image} />
      </Box>
    </marquee>
  )
}

export default MarqueeInfinite
