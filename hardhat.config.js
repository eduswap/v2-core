require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{
      version: "0.5.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      },
    }],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://open-campus-codex-sepolia.drpc.org",
      }
    },
    edutest: {
      url: "https://open-campus-codex-sepolia.drpc.org",
    },
  }
};