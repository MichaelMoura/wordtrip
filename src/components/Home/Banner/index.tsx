import { Box, Text, Image, Heading, Flex, useBreakpointValue, VStack} from "@chakra-ui/react";

export default function Banner(){

    return(
        <Flex 
        w="100%"
        h="sm"
        backgroundImage="url('/banner.svg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        alignItems={["center"]} 
        px={["2rem","4rem", "4rem", "8rem"]}
        >
            <Box w={["100%","100%","100%", "50%"]} >
                <Flex gap="2" alingItems="left" flexDirection="column" >
                    <Box marginRight='auto'>
                        <Heading as="h1" color="gray.50">5 Continentes,</Heading>
                        <Heading as="h1" color="gray.50">infinitas possibilidades</Heading>
                    </Box>
                    
                    <Text color="gray.100" >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                    
                </Flex>
            </Box>
            
                <Box position="relative" w="50%" display={["none", "none","none","block"]}>
                        <Image src="/airplane.svg" position="absolute" top="-75" right="0"/>
                </Box>
        
        </Flex>
    )
}