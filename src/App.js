
import Web3 from 'web3';
import './App.css';
import { useState } from 'react';
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
import AllNfts from './AllNfts';
import Navbar from "./Navbar"
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const contractAddress = "0xc43a10e6613b2e4c09364cd775245625d892ee13";




function App() {


  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora, sepolia],
    [
      publicProvider()
    ]
  );


  const { connectors } = getDefaultWallets({
    appName: 'MintingNew',
    projectId: '6e107b7dbed4349e4188db6beadf34a8',
    chains
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })





  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Router>
          <Routes>
            <Route path="/" element={ <AllNfts></AllNfts>} />
            <Route path="/contact" element={ <Contact></Contact>} />
       
        
          </Routes>
        </Router>
        
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
