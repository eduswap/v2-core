const { expect } = require("chai");

describe("EduswapV2Core Test", function () {
    let owner;
    let tokenA, tokenB;
    let factory, pair;

    beforeEach(async () => {
        // Getting signers
        [owner] = await ethers.getSigners();

        // Deploying the token contract
        tokenA = await ethers.deployContract("ERC20", [ethers.parseEther("100")], {});
        await tokenA.waitForDeployment();
        tokenB = await ethers.deployContract("ERC20", [ethers.parseEther("100")], {});
        await tokenB.waitForDeployment();

        // Deploying the factory contract
        factory = await ethers.deployContract("EduswapV2Factory", [owner.address], {});
        await factory.waitForDeployment();

        // Creating the pair contract
        await factory.createPair(await tokenA.getAddress(), await tokenB.getAddress());

        const pairAddress = await factory.getPair(await tokenA.getAddress(), await tokenB.getAddress());
        pair = await ethers.getContractAt("EduswapV2Pair", pairAddress);
    });

    it("Should token balance correctly", async function () {
        expect(await tokenA.balanceOf(owner.address)).to.equal(ethers.parseEther("100"));
        expect(await tokenB.balanceOf(owner.address)).to.equal(ethers.parseEther("100"));
    });

    it("should create a tokenA-tokenB pair", async () => {
        const token0 = await pair.token0();
        const token1 = await pair.token1();

        expect(token0).to.not.equal("0x0000000000000000000000000000000000000000");
        expect(token1).to.not.equal("0x0000000000000000000000000000000000000000");

        expect(
            (token0 === await tokenA.getAddress() && token1 === await tokenB.getAddress()) ||
            (token0 === await tokenB.getAddress() && token1 === await tokenA.getAddress())
        ).to.equal(true);
    });
});