import { Flex } from "@chakra-ui/react";
import ContinentTextInfo from "./ContinentTextInfo";

interface DescriptionProps{
    infos:Array<Number>;
}

export default function ContinentInfos({infos}:DescriptionProps){
    const [country,language,state] = infos;

    return(
        <Flex alignItems="center" justifyContent="center" w={["100%","100%","50%"]}>
            <Flex justifyContent="space-around" w="sm">
                <ContinentTextInfo number={country} text="País"/>
                <ContinentTextInfo number={language} text="Língua"/>
                <ContinentTextInfo number={state} text="Cidade +100" isCity/>
            </Flex>
        </Flex>
    )
}