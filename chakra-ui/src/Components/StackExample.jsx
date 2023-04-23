import { Stack, HStack, VStack , Box, Divider } from '@chakra-ui/react';

function StackExample(){

    return (
        <>
        <HStack spacing='24px'>
            <Box w='100px' h='100px' bg='yellow.200'>
                1
            </Box>
            <Box w='100px' h='100px' bg='tomato'>
                2
            </Box>
            <Box w='100px' h='100px' bg='pink.100'>
                3
            </Box>
        </HStack>   
        <Divider/>
        <VStack spacing='24px'>
            <Box w='100px' h='100px' bg='yellow.200'>
                1
            </Box>
            <Box w='100px' h='100px' bg='tomato'>
                2
            </Box>
            <Box w='100px' h='100px' bg='pink.100'>
                3
            </Box>
        </VStack>

        <Divider/>
        <Stack direction={{base:'column', md:'row'}} spacing='24px'>
            <Box w='100px' h='100px' bg='yellow.200'>
                1
            </Box>
            <Box w='100px' h='100px' bg='tomato'>
                2
            </Box>
            <Box w='100px' h='100px' bg='pink.100'>
                3
            </Box>
        </Stack>
        </>
    )
}           

export default StackExample;