import { Box, HStack, Image, Flex, Stack, Heading, Divider } from "@chakra-ui/react"
import { ST } from "next/dist/shared/lib/utils"

export function TravelTypes() {
    return (

        <Flex
        w="100%"
        alignItems="center"
        direction="column"
        justifyContent="center">

            <Box mt="2rem">

            <HStack spacing="10rem" justifyContent="center">


                <Image src="/img/Nightlife.svg" alt="Drink" />
                <Image src="/img/Beach.svg" alt="Prancha na praia" />
                <Image src="/img/Modern.svg" alt="Prédio" />
                <Image src="/img/Classic.svg" alt="Arquiteturas clássicas" />
                <Image src="/img/More.svg" alt="Mais opções" />


            </HStack>


            <Flex
            w="100%" maxW="1240px" mx="auto" mt="4rem" justify="center" align="center"
            >
    
                <Flex align="center" justify="center">
                    <Stack>
                        <Flex align="center" justify="center">
                            <Stack>
                                <Divider mb="2rem" as="hr" w="100%" borderWidth="2px" borderColor="gray.500" bg="red" />
                                <Heading
                                w="100%"
                                textAlign="center"
                                mt={["8", "16"]}
                                mb={["4", "8"]}
                                fontSize={["20px", "36px"]}
                                color="gray.700"
                                fontWeight="500"
                                >Vamos nessa?</Heading>
                            </Stack>
                        </Flex>
                        <Flex>
                            <Stack>
                                <Heading>Então escolha seu continente</Heading>
                            </Stack>
                        </Flex>
                    </Stack>
                </Flex> 
            </Flex>    

            </Box>

        </Flex>

    )

}