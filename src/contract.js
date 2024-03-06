require("dotenv").config();
const { ethers } = require("ethers");

// Load private key from .env file
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

// Set up the provider (you may want to specify a network or use a service like Infura or Alchemy)
provider = new ethers.JsonRpcProvider(RPC_URL);

// Set up a wallet using the private key and connect it to the provider
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

/**
 * Creates a contract object using ethers.js.
 * @param {Object} abi - The contract's ABI.
 * @param {string} address - The contract's address.
 * @return {Object} The contract object.
 */
function getContract(abi, address) {
  return new ethers.Contract(address, abi, wallet);
}

module.exports = { getContract };

// Example Usage (in another file):
// const { getContract } = require('./contract');
// const contractAbi = [/* ... ABI Array ... */];
// const contractAddress = '0x...'; // Replace with the actual contract address
// const myContract = getContract(contractAbi, contractAddress);
