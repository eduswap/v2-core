# EduswapV2Core Contract

This repository contains the EduswapV2Core contract, a fork of the UniswapV2Core contract, providing the core functionalities of the Eduswap decentralized exchange.

### Deployment Address

- EduswapV2Factory: [0xAdC632cf7d62cEEF5cEA6369B49684E835f62f36](https://opencampus-codex.blockscout.com/address/0xAdC632cf7d62cEEF5cEA6369B49684E835f62f36)
- Utils: [0x9A0ca57DD72eac6D38FA150cC7eF1cAce8682E13](https://opencampus-codex.blockscout.com/address/0x9A0ca57DD72eac6D38FA150cC7eF1cAce8682E13)

## Prerequisites

- Node.js v12+ LTS and npm (comes with Node)
- Hardhat

## Installation

### Clone the repository:

```bash
git clone https://github.com/educhain/v2-core
```

### Navigate to the project folder:

```bash
cd v2-core
```

### Install dependencies:

```bash
npm istall
```

## Set Up Configuration

1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

### For Linux or macOS:

```bash
cp .example.env .env
```

### Windows:

```bash
copy .example.env .env
```

## Compilation

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

## Quick Start Guide

### 1. Testing

Run the following command to execute the contract tests. Ensure you've written the tests in your Hardhat project's test directory.

```bash
npx hardhat test
```

### 2. Deployment

Run the following command to compile the contracts using the Solidity compiler and deploy the WETH to your Edu chain network.

```bash
npx hardhat run scripts/deploy.js --network edutest
```

## Conclusion

If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!
