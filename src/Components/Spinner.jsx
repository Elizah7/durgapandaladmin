import React from 'react'
import { Spinner } from '@chakra-ui/react'
const Loader = () => {
    return (
        <Spinner
        thickness='2px'
        speed='0.65s'
        emptyColor='green'
        color='orange'
        size='xl'
      />
      )
}

export default Loader
