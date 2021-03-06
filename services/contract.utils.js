require('dotenv').config()
const ethers = require('ethers')

const SimplifiedERC721ABI = require('../constants/simplifiederc721abi')
const rpcapi = process.env.NETWORK_RPC
const chaindID = parseInt(process.env.NETWORK_CHAINID)

const loadContractFromAddress = (address) => {
  try {
    let abi = SimplifiedERC721ABI
    let provider = new ethers.providers.JsonRpcProvider(rpcapi, chaindID)
    let contract = new ethers.Contract(address, abi, provider)
    return contract
  } catch (error) {}
}

const getTokenInfo = async (address, tkID) => {
  let minter = contractutils.loadContractFromAddress(address)
  if (!minter) return null
  let uri = await minter.tokenURI(tkID)
  return uri
}

const contractutils = {
  loadContractFromAddress,
  getTokenInfo,
}

module.exports = contractutils
