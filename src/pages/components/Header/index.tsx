import { Box, Image, Center, Flex } from '@chakra-ui/react'

export function Header() {
    return (

        <Flex
        as='header'
        w="100%"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        px="6"

        h={["50px", "100px"]}
        >
        <Box w="100%" mt="3rem">
            
            <Center h="4rem">
                <Image src="/img/logo.svg" alt="Worldtrip Logo" />
            </Center>


        </Box>

        </Flex>

    );
}