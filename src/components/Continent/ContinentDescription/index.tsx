import { Flex } from "@chakra-ui/react";
import ContinentInfos from "./ContinentInfos";
import Description from "./Description";

interface ContinentDescriptionProps{
    description:{
        text:string;
        infos:Array<number>;
    }
}

export default function ContinentDescription({description}:ContinentDescriptionProps){
    return(
        <Flex py="12" px="12" gap="8" flexDirection={["column", "column", "row"]}>
            <Description text={description.text}/>
            <ContinentInfos infos={description.infos}/>
        </Flex>

    )
}