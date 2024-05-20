import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Federant } from "next/font/google";
import Link from "next/link";

export default function Navbar() {
    const address =useAddress();
    return(
        <Container maxW={"1440"} py={4}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link href="/">
                    <Text fontWeight={"bold"}>Transfer Token</Text>
                </Link>
                {address && (
                    <Flex flexDirection={"row"}>
                        <Link href={"/transfer"}>
                            <Text mr={"8"}>Transfer Token</Text>
                        </Link>
                        <Link href={"claim"}>
                            <Text mr={"8"}>Claim</Text>
                        </Link>
                        <Link href={`/profile/${address}`}>
                            <Text>My Account</Text>
                        </Link>
                    </Flex>
                )}
                <ConnectWallet></ConnectWallet>
            </Flex>
        </Container>
    )
}