import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-log-remover";
import "hardhat-tracer";
import "hardhat-dependency-compiler";
import "@nomiclabs/hardhat-etherscan";

import dotenv from "dotenv";
dotenv.config();

const ETHERSCAN_API = process.env.ETHERSCAN_API || "";
const ARCHIVE_RPC_URL = process.env.ARCHIVE_RPC_URL || "";

if (ARCHIVE_RPC_URL === "") throw new Error(`ARCHIVE_RPC_URL env var not set`);
if (ETHERSCAN_API === "") throw new Error(`ETHERSCAN_API env var not set`);

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.9" }],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: ARCHIVE_RPC_URL,
        blockNumber: 11800000,
      },
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
  // dependencyCompiler: {
  //   paths: [
  //     "@uniswap/v2-core/contracts/UniswapV2Pair.sol",
  //     "@uniswap/v2-core/contracts/UniswapV2Factory.sol",
  //     "@uniswap/v2-periphery/contracts/UniswapV2Router02.sol",
  //     "@openzeppelin/contracts/token/ERC20/ERC20.sol",
  //   ],
  // },
};

export default config;
