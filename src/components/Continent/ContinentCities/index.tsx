import { Box, Heading, Grid, Stack } from "@chakra-ui/react";
import City from "./City";

interface ContinentContriesProps{
    cities:{
        name:string;
        countryName:string;
        countryFlag:string;
        banner:string;
    }[]
}

export default function ContinentCities({cities}:ContinentContriesProps){
    return(
        <Box px="12" width="100%" marginBottom="100">
            <Stack spacing="8">
                <Heading as="h2" color="gray.600">
                    Cidades +100
                </Heading>
                <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)","repeat(3,1fr)", "repeat(4,1fr)", "repeat(5,1fr)"]} gridGap={8} gridRowGap="7rem">
                    {cities.map(city=>(
                        <City key={city.name} city={city}/>
                    ))}
                    {cities.map(city=>(
                        <City key={city.name} city={city}/>
                    ))}
                    
                </Grid>
            </Stack>
        </Box>
    )
}