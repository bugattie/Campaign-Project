// Purpose of this file is to take the compile code, and deploy it to ethereum network.
const { Web3 } = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const compiledFactory = require("../ethereum/build/CampaignFactory.json");

const provider = new HDWalletProvider({
  mnemonic: { phrase: process.env.ACCOUNT_PNEUMONIC },
  providerOrUrl: process.env.INFURA_LINK,
});
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from ${accounts[0]}`);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ from: accounts[0], gas: "1000000" });

  console.log(`Contract deployed to ${result.options.address}`);

  provider.engine.stop();
};

deploy();
