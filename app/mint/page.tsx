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
            <div className="soldout">
                <h1 className="title">SOLD OUT!!!</h1>
              <p><br/>You can find your RetroDoge on secondary here:<br/>
                <a href="https://opensea.io/collection/retrodogesnft" target="_blank">opensea.io/collection/retrodogesnft</a> 
                <br/>
              </p>
            </div>

        </div>
    )
  }