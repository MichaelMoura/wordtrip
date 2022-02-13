import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";

interface ContinentBannerProps{
    src:string;
    name:string;
}



export default function ContinentBanner({name,src}:ContinentBannerProps){
    const isWidescreen = useBreakpointValue({
        base:false,
        md:true
    })

    return(
        <Box position="relative" w="100%" h={["sm","sm","md"]}>
            <Box
                w="100%"
                h="100%"
                backgroundImage={`url(${src})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundAttachment="fixed"
                bgPosition="center"
                color="gray.50"
                filter="brightness(0.75)"
            />
        {isWidescreen ? (
            <Heading position="absolute" bottom="50" left="50"  color="gray.50" size="2xl" as="h1">{name}</Heading>
        ):(
            <Heading position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)"  color="gray.50" size="2xl" as="h1">{name}</Heading>
        )}

        </Box>
        
    )
}