import { Box, Flex, Button, Text, HStack, Heading, Spacer, useToast, AvatarBadge, Avatar } from '@chakra-ui/react'
import { UnlockIcon } from "@chakra-ui/icons"
import React from 'react'

export default function Navbar() {
    const toast = useToast();
    return (
        <div>
            <Flex as="nav" p="10px" alignItems="center">
                <Heading as="h1">Tasker</Heading>
                <Spacer />

                <HStack spacing="20px">
                    <Avatar name="mario" src="/img/mario.png">
                        <AvatarBadge width="1.3em" bg="purple.500">
                            <Text fontSize="xs" color="white">3</Text>
                        </AvatarBadge>
                    </Avatar>
                    <Text>sutariyasumit8000@gmail.com</Text>
                    <Button
                        colorScheme="purple"
                        onClick={() => toast({
                            title: 'Logged out.',
                            description: "Successfully logged out",
                            duration: 10000,
                            isClosable: true,
                            position: 'top',
                            status: 'success',
                            icon: <UnlockIcon />,
                        })}
                    >Logout</Button>
                </HStack>
            </Flex>
        </div>
    )
}
