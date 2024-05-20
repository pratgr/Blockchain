import { Box, Card, Spinner, Text } from "@chakra-ui/react";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";
import React from "react";

type Props = {
    tokenAddress: string;
    isSelected?: boolean;
};

const TokenSelection: React.FC<Props> = ({ tokenAddress, isSelected }) => {
    const { contract } = useContract(tokenAddress);
    
    const { data: contractMetadata, isLoading: isContractMetadataLoading } = useContractMetadata(contract);

    let coinBorderColor = "gray.200";

    if (isSelected) {
        coinBorderColor = "blue.500";
    }

    return (
        <Card p={4} mr={2} border={"2px solid"} borderColor={coinBorderColor}>
            {!isContractMetadataLoading ? (
                <Box>
                    {/* Check if contractMetadata is defined before accessing its properties */}
                    {contractMetadata && (
                        <Text>{contractMetadata.symbol}</Text>
                    )}
                </Box>
            ) : (
                <Spinner />
            )}
        </Card>
    )
};

export default TokenSelection;
