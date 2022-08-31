import { Box, Image } from '@chakra-ui/react'

export function Banner() {
    return (
        <>
        <Box mt="2rem"
        fontWeight="500"
        fontSize={["20px", "36px"]}
        color="gray.100"
        mb="4">
            <Image w="100%" src="/img/Banner.svg" alt="Banner" />
        </Box>
        </>
    )
}