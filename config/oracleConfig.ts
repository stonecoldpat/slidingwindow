// any.sender API configuration
export const MINIMUM_ANYSENDER_DEADLINE = 410; // It is 400, but this provides some wiggle room.
export const ANYSENDER_RELAY_CONTRACT =
  "0xa404d1219Ed6Fe3cF2496534de2Af3ca17114b06"; // On-chain relay contract
export const ANYSENDER_API = "https://api.anydot.dev/any.sender.mainnet"; // API Link
export const RECEIPT_KEY = "0x02111c619c5b7e2aa5c1f5e09815be264d925422"; // Any.sender operator signing key
export const DEPOSIT_CONFIRMATIONS = 40; // Must wait this long before any.sender recognises deposit

// Oracle and Infura configuration
export const INFURA_PROJECT_ID = "7333c8bcd07b4a179b0b0a958778762b";
export const NETWORK_NAME: string = "mainnet";
export const ORACLE_CONTRACT_ADDRESS =
  "0x277aee1ecba0034d24b9dfac5c866ff696fec087";
export const ORACLE_MNEMONIC = "";
