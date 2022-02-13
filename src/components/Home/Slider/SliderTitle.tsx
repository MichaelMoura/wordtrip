import { Flex, Heading } from "@chakra-ui/react";

export default function SliderTItle(){
    return(
        <Flex flexDirection="column" alignItems="center" gap="0.5rem" color="gray.500" >
            <Heading fontSize={["1.3rem", "1.5rem", "2rem"]}>Vamos nessa?</Heading>
            <Heading fontSize={["1.3rem", "1.5rem", "2rem"]}>Então escolha seu continente</Heading>
        </Flex>
    )
}