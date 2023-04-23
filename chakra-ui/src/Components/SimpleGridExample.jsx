import { SimpleGrid,Box,Center} from "@chakra-ui/react";

function SimpleGridExample(){
    const items = new Array(12).fill(0).map((a,i)=> i + 1);

    return (
        <SimpleGrid columns={{base:1,sm:2,md:3,lg:4,xl:5,'2xl':6}} spacing={4}>
            {
                items.map((el)=>(
                    <Box bg='tomato' height='80px' color='white'>
                        <Center height='100%'>{el}</Center>
                    </Box>
                ))
            }
         
        </SimpleGrid> 
    )
}

export default SimpleGridExample;