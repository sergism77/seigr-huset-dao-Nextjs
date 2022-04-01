import { ThirdwebSDK } from "@thirdweb-dev/sdk";



// instantiate the SDK with a read only RPC url or a Signer to perform transactions
const sdk = new ThirdwebSDK("https://polygon-mainnet.g.alchemy.com/v2/z42wSEnZPMEPpgfjpVwl0N_RP86FxH4j");

// access your deployed contracts
const nftDrop = sdk.getNFTDrop("0x71fc05dE44C26CDF9a43c4Ed22E93f18E45C60F5");
const marketplace = sdk.getMarketplace("0x...");

// Read from your contract
const listings = await marketplace.getAllListings();

// Perform transactions (requires a signer)
await marketplace.buyoutDirectListing(listingId, quantityDesired);

function Home() {
    return <div>Home</div>
  }
  
  export default Home