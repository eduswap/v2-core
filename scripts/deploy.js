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