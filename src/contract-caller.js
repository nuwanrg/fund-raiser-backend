require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { ethers } = require("ethers");
const { getContract } = require("./contract.js");

// Load the ABI from the compiled contract JSON file
const fundRaiserJsonPath = path.join(__dirname, "../contracts/FundRaiser.json"); // Update the path
const fundRaiserJson = JSON.parse(fs.readFileSync(fundRaiserJsonPath, "utf8"));
const fundRaiserAbi = fundRaiserJson.abi;

// The address of the deployed FundRaiser contract
const fundRaiserAddress = process.env.CONTRACT_ADDRESS; // Replace with the actual contract address

// Create the contract instance
const fundRaiserContract = getContract(fundRaiserAbi, fundRaiserAddress);

// Example: interact with the contract
async function fund() {
  try {
    // Specify the amount of Ether you want to send
    // For example, sending 0.1 Ether
    const amount = ethers.parseEther("0.002");

    // Call the fund function
    const transactionResponse = await fundRaiserContract.fund({ value: amount });

    // Wait for the transaction to be mined
    const txReceipt = await transactionResponse.wait();

    console.log("Funded successfully!. TxReceipt:", txReceipt);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
