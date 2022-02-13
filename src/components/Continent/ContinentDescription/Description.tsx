import { Text, Box } from "@chakra-ui/react";

interface DescriptionProps{
    text:string;
}

export default function Description({text}:DescriptionProps){
    return(
        <Box w={["100%", "100%", "50%"]}>
            <Text fontSize="1.5rem" lineHeight="9" color="gray.500">{text}</Text>
        </Box>
    )
}