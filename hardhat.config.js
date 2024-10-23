require("@nomicfoundation/hardhat-toolbox");

require('hardhat-contract-sizer');
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.23",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ],
  },

  defaultNetwork: 'localhost',
  networks: {
    hardhat: {
      blockGasLimit: 1000000000,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      gasPrice: 111 * (10 ** 9),
      gasLimit: 6 * (10 ** 6),
    },
  },

  gasReporter: {
    enabled: true,
    // outputFile: './gasReport',
  },
  contractSizer: {
    runOnCompile: true,
    // outputFile: './contractSize',
  },

  mocha: {
    timeout: 100000000
  },
};
