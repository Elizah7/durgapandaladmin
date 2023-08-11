import { Box, Image } from '@chakra-ui/react';
import React from 'react';


const Marquee = ({ images }) => {
  return (
    <Box className="marquee" width="100%">
      {images.map((image, index) => (
        <Image key={index} src={image.image} alt={`Image ${index}`} width="100px"/>
      ))}
    </Box>
  );
};

export default Marquee;