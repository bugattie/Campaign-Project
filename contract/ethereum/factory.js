import web3 from "./web3";
import compiledFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  compiledFactory.abi,
  "0x53D1ef7a4E982aCf503Ca9811c3002Bfbdb99e38"
);

export default instance;
