const hre = require("hardhat"); // v5

async function main() {
  const Multisig = await hre.ethers.getContractFactory("Multisig");
  const multisig = await Multisig.deploy();
  console.log(
    `Multisig: ${await multisig.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
