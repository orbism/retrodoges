"use client"; // this is a client component
import React from 'react'; // Import React explicitly, helpful for TypeScript
import Head from 'next/head';
import Image from 'next/image';
import { ThirdwebSDK } from "@thirdweb-dev/react";

export default function Page() {
    const readOnlySdk = new ThirdwebSDK("goerli", {
      clientId: "9aa93eb10f6772a18ab6cefc43912dee",
    });
    
    return (
  
        <div className="minter">

            <div className="sale"></div>

            <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xeEecdE100B55f135A40ca9D92a52BD7723235814&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=eec08ba490c204c262ef9c899640c032&theme=dark&primaryColor=orange"
              width="600px"
              height="600px"
              frameBorder={0}
          ></iframe>

        </div>
    )
  }