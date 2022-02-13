import { Flex, VStack, Box } from "@chakra-ui/react";
import SliderTitle from "./SliderTitle";
import Slides from "./Slides";

export default function Slider(){
    return(
        <Box px={["0rem","3rem","6rem"]} py="1rem"  w="100%">
            <VStack spacing="6">
                <Box w="4rem" h="1px" bg="black" m="0 auto"/>
                <SliderTitle/>
            </VStack>
            <Slides/>
        </Box>
    )
}