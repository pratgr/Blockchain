# Token Transfer Contract

This contract is written in Solidity version 0.8.9 and allows for the transfer of ERC20 tokens between addresses.

## Contract Details

The `TokenTransferContract` has the following key features:

- **Owner Only Functions**: Certain functions can only be called by the owner of the contract. This is enforced by the `onlyOwner` modifier.

- **Token Verification**: Tokens must be verified before they can be transferred. This is enforced by the `onlyVerifiedToken` modifier.

- **Token Transfer**: The `transfer` function allows a user to transfer a specified amount of a verified ERC20 token to another address.

- **Transaction Logging**: Every successful transaction emits a `TransactionCompleted` event, which includes details of the transaction.

## Interface

The contract interacts with ERC20 tokens through the `IERC20Interface`, which includes the `transferFrom`, `approve`, and `balanceOf` functions.

## Usage

To use this contract, first verify the ERC20 token you wish to transfer using the `addVerifyToken` function. Then, call the `transfer` function, specifying the token, recipient address, amount, and an optional message.

## Disclaimer

This contract does not perform any checks or validations on the ERC20 tokens it interacts with. Always ensure the legitimacy of tokens before verifying them for use with this contract.
