import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const providerUrl = process.env.SEPOLIA_RPC
const provider = new ethers.JsonRpcProvider(providerUrl);

export default provider;
