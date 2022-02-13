import { Flex, Image,Text, VStack } from "@chakra-ui/react" ;

interface IconProps{
    category:{
        src:string;
        description:string; 
    }
}

export default function Icon({category}:IconProps){
    return(
        <Flex textAling="right" flexDirection="column" justifyContent="center" textAlign="center" w="8rem">
            <Image src={category.src} w="4rem" margin="0 auto"/>
            <Text color="gray.500" fontWeight="bold" display="block" marginTop="1.5rem">{category.description}</Text>
        </Flex >
    )
}