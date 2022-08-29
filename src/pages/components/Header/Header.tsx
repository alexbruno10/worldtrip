import { Box, Image, Center, HStack } from '@chakra-ui/react'
// import Logo from '/img/Banner.svg'

export function Header() {
    return (

        <Box w="100%" mt="3rem">
            
            <Center h="4rem">
                <Image src="/img/logo.svg" alt="Worldtrip Logo" />
            </Center>

            <Box mt="2rem">
                <Image w="100%" src="/img/Banner.svg" alt="Banner" />
            </Box>

            <Box mt="2rem">

                <HStack spacing="10rem" justifyContent="center">
                
        
                    <Image src="/img/Nightlife.svg" alt="Drink" />
                    <Image src="/img/Beach.svg" alt="Prancha na praia" />
                    <Image src="/img/Modern.svg" alt="Prédio" />
                    <Image src="/img/Classic.svg" alt="Arquiteturas clássicas" />
                    <Image src="/img/More.svg" alt="Mais opções" />
                    
               

                </HStack>

            </Box>

        </Box>

    );
}