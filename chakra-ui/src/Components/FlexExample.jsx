import { Flex, Spacer, Box } from '@chakra-ui/react';

function FlexExample(){

    return (
        <>
        <Flex>
            <Box p='4' bg='red.400'>
                Box 1
            </Box>
            {/* <Spacer /> */}
            <Box p='4' bg='green.400'>
                Box 2
            </Box>
        </Flex>         
        </>
    )
}

export default FlexExample;