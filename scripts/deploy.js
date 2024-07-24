const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy EduswapV2Factory
    const eduswapV2Factory = await hre.ethers.deployContract("EduswapV2Factory", [deployer.address], {});
    await eduswapV2Factory.waitForDeployment();
    console.log("EduswapV2Factory deployed to:", await eduswapV2Factory.getAddress());

    // Deploy Utils
    const utils = await hre.ethers.deployContract("Utils", [], {});
    await utils.waitForDeployment();
    console.log("Utils deployed to:", await utils.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
// Deploying contracts with the account: 0x9E18268FA21a3612309211cbE186eA1B81469d96
// EduswapV2Factory deployed to: 0xAdC632cf7d62cEEF5cEA6369B49684E835f62f36
// Utils deployed to: 0x9A0ca57DD72eac6D38FA150cC7eF1cAce8682E13