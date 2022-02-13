import { Box, Heading, Text,Popover,IconButton, 
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Flex,
    UnorderedList,
    ListItem
    } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface ContinentTextInfoProps{
    number:Number;
    text:string;
    isCity?:boolean;
}

export default function ContinentTextInfo({number,text, isCity=false}:ContinentTextInfoProps){
    return(
        <Box textAlign="center">
            <Heading color="yellow.900" as="h4">{number}</Heading>
            {!isCity ? (
                <Text fontWeight="bold">{text}</Text>
            ):(
                <Flex alignItems="center" gap="2">
                    <Text fontWeight="bold">{text}</Text>
                    <Popover isLazy placement="left">
                        <PopoverTrigger>
                            <InfoOutlineIcon cursor="pointer" color="gray.300"/>
                        </PopoverTrigger>
                        <PopoverContent bg="white.100" borderColor="gray.200">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader fontWeight="bold" color="gray.700">Cidade Europeias</PopoverHeader>
                            <PopoverBody>
                                <UnorderedList textAlign="left" color="gray.500">
                                    <ListItem>Paris</ListItem>
                                    <ListItem>Roma</ListItem>
                                    <ListItem>Londres</ListItem>
                                    <ListItem>Berlin</ListItem>
                                    <ListItem>Lisboa</ListItem>
                                    <ListItem>Monaco</ListItem>
                                    <ListItem>Dublim</ListItem>
                                </UnorderedList>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
            )}
        </Box>
    )
}