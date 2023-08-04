
import Web3 from 'web3';
import abi from "./abi.json";
import axios from 'axios';
const contractAddress = "0xc43a10e6613b2e4c09364cd775245625d892ee13";

export const displayAllNfts = async (connector, address) => {
    let dataFetched = [];
    if (address != undefined){
        
        const currentProvider = connector.options.getProvider();
        //   await currentProvider.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(currentProvider);
          const userAccounts = await web3.eth.getAccounts();
          console.log(userAccounts);
          const ethBalance = await web3.eth.getBalance(userAccounts[0]);
          console.log(Number(ethBalance));
          const instance = await new web3.eth.Contract(abi, contractAddress);
          const maxSupply = await instance.methods.maxSupply().call({ from: userAccounts[0] });
          
          for (let i = 1; i<= maxSupply; i++){
            const jsonLink = await instance.methods.tokenURI(i).call({ from: userAccounts[0] });
            const jsonData = await axios.get(jsonLink);
            dataFetched.push(jsonData.data);
          }
          
          
    }
    else{
        console.log("Connect Wallet");
    }

    return dataFetched;
}