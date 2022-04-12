// Here is the configuration specific to the Elven Tools Smart Contract
// The data can be also queried on SC, but because it is static it is better to save the api bandwidth
// It is important to keep the same values as configured on smart contract

// Elven Tools NFT Smart Contract address - replace it with yours
export const smartContractAddress =
  'erd1qqqqqqqqqqqqqpgqvg379zhcs22dhma02zq4j3xp8q5539pph50sapy54k';

// Amount of the NFTs in the collection
export const collectionSize = 100;

// Number of the NFTs for one address in total
export const tokensLimitPerAddressTotal = 10;

// Collection ticker
export const collectionTicker = 'MRG-3d2dc4';

// Start or pause minting process. UI will react on this. Remember to keep itin in sync with Smart Contract. This is very important.
export const isMintingStarted = true;

// Enable/Disable the drop. UI will react on this. Remember to keep it in in sync with Smart Contract. This is very important.
export const isDropActive = false;

// The number of the NFTs for one address per current active drop can be ignored if there are no drops active
export const tokensLimitPerAddressPerDrop = 0;

// Enable/Disable allowlist. UI will react on this. Remember to keep it in in sync with Smart Contract. This is very important.
export const isAllowlistEnabled = false;

// Base transaction gas limit for the mint tx, it will be calculated, this is just a base
export const mintTxBaseGasLimit = 14000000;

// Mint endpoint name on the Smart Contract - replace with yours if you modified it
export const mintFunctionName = 'mint';

// Single token seling price - configurable on smart contract when deployed 1 EGLD = 10^18
export const tokenSellingPrice = '10000000000';
