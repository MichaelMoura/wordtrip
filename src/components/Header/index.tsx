import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link"

export default function Header(){
    return(
        <Flex as="header" justifyContent="center" alignItems="center" py="4">
            <Link href="/" passHref>
                <Image src="/logo.svg" width="40" cursor="pointer"/>
            </Link>
        </Flex>
    )
}