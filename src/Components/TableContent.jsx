import React from 'react'
import { Tr, Td, Image, Text } from '@chakra-ui/react'
const TableContent = (props) => {
    const { image, caption } = props
    return (
        <Tr>
            <Td>
            <Text>123456</Text>
            </Td>
            <Td>
                <Text>{caption}</Text>
            </Td>
            <Td>
                <Text>
                    hi
                </Text>
            </Td>
            <Td>fdsfad</Td>
            <Td>dfsafd</Td>
        </Tr>
    )
}

export default TableContent
