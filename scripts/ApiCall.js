const addr = "0xFeE64F07C20F72832Bb07A4C66Cd8b6E4eeF215e";
const chainlinkAddr = "0xa36085F69e2889c224210F603D836748e7dC0088";

async function main() {
  const consumer = await hre.ethers.getContractAt("APIConsumer", addr);

  const abi = ["function transfer(address, uint256) external"]
  const chainlink = await ethers.getContractAt(abi, chainlinkAddr);

  const tx = await chainlink.transfer(addr, ethers.utils.parseEther(".1"));
  await tx.wait(); // mined

  let hex = await consumer.volume();
  console.log(parseInt(hex, 10));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });