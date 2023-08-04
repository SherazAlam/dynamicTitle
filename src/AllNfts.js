
import Web3 from 'web3';
import './App.css';
import { useEffect, useState } from 'react';
import abi from "./abi.json";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  sepolia
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { useAccount } from 'wagmi'
import { displayAllNfts } from './contractInteraction';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

const contractAddress = "0xc43a10e6613b2e4c09364cd775245625d892ee13";

const AllNfts = () => {
    const { address, isConnecting, isDisconnected } = useAccount();
    const [nftData, setNftData] = useState("");
    
    const connector = new MetaMaskConnector();
   
  
  
  
    
  
  
  useEffect(()=>{
   displayAllNfts(connector, address).then((data)=>setNftData(data));
   

  },[address])

    return (
   
          <div className="App">
            <Helmet>
            <title>All NFTs</title>
        <meta name='description' content='All NFTs Page Description'></meta>
            </Helmet>
            <Navbar></Navbar>
            <h1>All NFTS</h1>
            {address && <p>Walled Connected!</p>}
            {nftData && nftData.map((data)=>{
                return(
                    <div className='card'>
                    <h1>{data.name}</h1>
                    <h3>{data.description}</h3>
                    <img src={data.image_url}></img>
                    </div>
                )
            })}
          </div>
        
    );
}

export default AllNfts