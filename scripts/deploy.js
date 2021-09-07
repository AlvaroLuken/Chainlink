const { ethers, upgrades } = require("hardhat");

async function main() {
  const APIConsumer = await hre.ethers.getContractFactory("APIConsumer");
  const instance = await APIConsumer.deploy();
  await instance.deployed();

  console.log("Price feed is at: ", instance.address);
}

main();