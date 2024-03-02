import { Box, Flex, Button, Text, HStack, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <Flex as="nav" p="10px" alignItems="center">
                <Heading as="h1">Tasker</Heading>
                <Spacer />

                <HStack spacing="20px">
                    <Box bg="gray.200" p="10px">sd</Box>
                    <Text>sutariyasumit8000@gmail.com</Text>
                    <Button colorScheme="purple">Logout</Button>
                </HStack>
            </Flex>
        </div>
    )
}
