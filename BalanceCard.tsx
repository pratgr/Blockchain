import { Card, Spinner, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractEvents, useContractMetadata, useTokenBalance } from "@thirdweb-dev/react";

type Props = {
    tokenAddress: string;
};

export default function BalanceCard({ tokenAddress }: Props) {
    const address = useAddress();

    const {
        contract
    } = useContract(tokenAddress);

    const {
        data: contractMetadata,
        isLoading: isContractMetadataLoading,
    } = useContractMetadata(contract);

    const {
        data: balance,
        isLoading: isBalanceLoading,
    } = useTokenBalance(contract, address);

    const {
        data: events,
        isLoading: isEventsLoading,
    } = useContractEvents(
        contract,
        "get"
    );

    return (
        <Card p={4} width={"100%"} height={"100%"} border={"2px solid"} borderColor={"gray.100"}>
            {!isContractMetadataLoading ? (
                <Stack textAlign={"center"}>
                    {/* Check if contractMetadata is defined before accessing its properties */}
                    {contractMetadata && (
                        <>
                            <Text fontWeight={"bold"} fontSize={"2xl"}>{contractMetadata.symbol}</Text>
                            <Text>Balance:</Text>
                            {!isBalanceLoading ? (
                                <Text fontSize={"3xl"} fontWeight={"bold"}>{balance?.displayValue}</Text>
                            ) : (
                                <Spinner />
                            )}
                        </>
                    )}
                </Stack>
            ) : (
                <Spinner />
            )}
        </Card>
    )
}