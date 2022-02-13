import { GridItem, Image, Flex, Box, Text, VStack } from "@chakra-ui/react";

interface CityProps{
    city:{
        name:string;
        countryName:string;
        countryFlag:string;
        banner:string;
    }
}

export default function City({city}:CityProps){
    return(
        <GridItem borderRadius="5px 5px 0px 0">
            <Image
              src={city.banner}
              alt={city.countryName}
              loading="lazy"
              width="100%"
              height="100%"
              borderRadius="5px 5px 0px 0"
            />
            <Flex
              borderLeft="1px"
              borderBottom="1px"
              borderRight="1px"
              borderColor="yellow.200"
              py="5"
              px="4"
              justifyContent="space-between"
              alignItems="center">
                <Box lineHeight="1.5rem">
                    <Text  color="gray.600" fontWeight="bold" fontSize="1.2rem">{city.name}</Text>
                    <Text  color="gray.200" fontSize="0.8rem" >{city.countryName}</Text>
                </Box>
                <Box>
                    <Image src={city.countryFlag} boxSize="6" borderRadius="full"/>
                </Box>
            </Flex>
        </GridItem>
    )
}