const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

//create task namee accounts
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const address = await account.getAddress()
    console.log(hre.ethers); // Add this line for debugging
    console.log(account);
    const balance = await hre.ethers.provider.getBalance(address)
    console.log(address + " : " + balance + " wei ");
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-mainnet.g.alchemy.com/v2/J6UwYvHlxoxla4P4hYjqwPo5qZo5hsxW",
      accounts: ["1a868e64b34ffa5bd460ec45aa607f372a0711c47d8e7781c47e8bdad040b9cb"]
    }
  },
};
