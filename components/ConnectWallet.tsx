import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useNetwork,
    useAddress,
    useDisconnect,
  } from '@thirdweb-dev/react';
import { Button } from 'reactstrap';


// Function to shorten someones wallet address 
const shortenAddress = (str: string) => {
    return str.substring(0, 6) + "..." + str.substring(str.length - 4);
  };

  export const ConnectWallet = () => {
    const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    const network = useNetwork();
  
    // If a wallet is connected, show address, chainId and disconnect button
    if (address) {
      return (
        <div>
          Address: {shortenAddress(address)}  {' '}

          <Button color="dark" size="sm" onClick={disconnectWallet}>Disconnect</Button>
        </div>
      );
    }
  
    // If no wallet is connected, show connect wallet options
    return (
      <div>
        <Button color="dark" size="sm" onClick={() => connectWithCoinbaseWallet()}>
          Connect Coinbase Wallet
        </Button> {' '}
        <Button color="dark" size="sm" onClick={() => connectWithMetamask()}>Connect MetaMask</Button> {' '}
        <Button color="dark" size="sm" onClick={() => connectWithWalletConnect()}>
          Connect WalletConnect
        </Button> {' '}
      </div>
    );
  };