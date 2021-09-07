require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.0",
      },
      {
        version: "0.5.12",
        settings: {},
      },
      {
        version: "0.6.6",
        settings: {},
      },
    ],
  },
  networks: {
    kovan: {
      url: "https://eth-kovan.alchemyapi.io/v2/UpM5o4Wul6NNEeRLBpyVdyZctnV-uba8",
      accounts: [`794634da9251b633167df5671d00c24c0b2c0ce311ef37d8bb4e86095802c56b`]
    }
  },
  etherscan: {
    apiKey: "6Q9AU63Z4MNV5IQ965A2GNTXAIH4BGU8KS"
  }
};
