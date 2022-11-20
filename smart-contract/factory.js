import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xFaC9f7aF034665E814Dcad47232B5902FB628d63"
);

export default instance;
