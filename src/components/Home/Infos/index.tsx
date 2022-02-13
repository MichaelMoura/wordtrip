import { Flex, useBreakpointValue , SimpleGrid, UnorderedList, ListItem, Text, Box} from "@chakra-ui/react";
import Icon from "./Icon";

export default function Infos(){
    const isWide = useBreakpointValue({
        sm:false,
        md:true
    })

    const categories = [
        {
            description:"vida noturna",
            src:"/cocktail.svg"
        },
        {
            description:"praia",
            src:"/surf.svg"
        },
        {
            description:"moderno",
            src:"/building.svg"
        },
        {
            description:"clássico",
            src:"/museum.svg"
        },
        {
            description:"e mais...",
            src:"/earth.svg"
        },
    ]

    if(!isWide){
        return(
            <UnorderedList px={["3rem","4rem"]} py="2rem" color="gray.500" ml="0">
                <SimpleGrid columns={2} justifyContent="center">
                    {categories.map(category=>(
                        <ListItem key={category.description} color="yellow.900" fontSize={["1rem","1.5rem"]} ml={["1rem","1rem"]}>
                            <Text as="span" color="gray.700">{category.description}</Text>
                        </ListItem>
                    ))}
                </SimpleGrid>
            </UnorderedList>
        )
    }else{
        return(    
            <Box>
                <Flex px={["2rem","4rem", "4rem", "8rem"]} color="gray.500" justifyContent="space-between" py="2rem" >
                {categories.map(category=>(
                    <Icon category={category} key={category.description}/>
                ))}
                </Flex>
            </Box>
        )
    }
    
}

//<SimpleGrid columns={2} templateRows="auto"></SimpleGrid>