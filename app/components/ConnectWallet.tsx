import { useState, useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { providers } from 'ethers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: '66f62f5cc1d14eb89f39281dfaa0e927',
    },
  },
};

const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions,
});

export const ConnectWallet = () => {
  const { activate, account, deactivate } = useEthers();
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      handleConnectWallet();
    }
  }, []);

  const handleConnectWallet = async () => {
    setConnecting(true);
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new providers.Web3Provider(provider);
      activate(web3Provider);
    } catch (error) {
      console.log(error);
    }
    setConnecting(false);
  };

  const handleDisconnectWallet = async () => {
    deactivate();
    await web3Modal.clearCachedProvider();
  };

  return (
    <div>
      <FontAwesomeIcon icon={faWallet} />
      {account ? (
        <>
          <span>{account}</span>
          <button onClick={handleDisconnectWallet}>Disconnect</button>
        </>
      ) : (
        <button onClick={handleConnectWallet} disabled={connecting}>
          {connecting ? 'Connecting...' : 'Connect'}
        </button>
      )}
    </div>
  );
};
