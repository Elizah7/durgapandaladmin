// NavratriCard.js
import React from 'react';
import { Box, Image, Text, Heading } from '@chakra-ui/react';

const NavratriCard = ({ image, heading, description, significance }) => {
    return (
        <Box
            background="var(--clr-1)"
            color="white"
            borderRadius="md"
            p="4"
            boxShadow="lg"
            textAlign="center"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            display="flex"
            justifyContent="space-between"
            
            padding="1%"
        >
            <Box width="45%">
                <Image src={image} alt={heading} mb="4" />
            </Box>
            <Box width="45%" textAlign="left">
                <Heading as="h3" fontSize="xl" mb="2">
                    {heading}
                </Heading>
                <Text>{description}</Text>
                <Text>महत्ता:  {significance}</Text>
            </Box>
        </Box>
    );
};

export default NavratriCard;
