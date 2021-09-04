import { Wallet, ethers } from "ethers";
import { Provider } from "ethers/providers";
import {
  RelayTransaction,
  RelayTransactionReceipt,
  UnsignedRelayTransactionWrapper
} from "@any-sender/data-entities";
import { RelayFactory } from "@any-sender/contracts";
import { AnySenderClient } from "@any-sender/client";
import { defaultAbiCoder, keccak256, arrayify, parseEther } from "ethers/utils";

export class MockAnySenderClient {
  MINIMUM_ANYSENDER_DEADLINE = 410;
  ANYSENDER_RELAY_CONTRACT = "";
  relayerKey: Wallet;
  provider: Provider;
  relayContract: ethers.Contract;

  /**
   * Sets up the wallet and provider
   * @param relayerKey Signing key for relayer
   * @param provider Provider
   */
  constructor(relayerKey: Wallet, provider: Provider) {
    // Set up a provider and relayer
    this.provider = provider;
    this.relayerKey = relayerKey;
  }

  /**
   * Constructors cannot be async. So we need to do the heavy lifting
   * here for setting up the relay contract etc & depositing funds.
   */
  async setup() {
    // Deploy relay.sol and keep its address
    const relayFactory = new RelayFactory(this.relayerKey);
    const deployRelay = relayFactory.getDeployTransaction();
    const response = await this.relayerKey.sendTransaction(deployRelay);
    const receipt = await response.wait(1);

    this.relayContract = new ethers.Contract(
      receipt.contractAddress as string,
      relayFactory.interface.abi,
      this.provider
    );

    this.ANYSENDER_RELAY_CONTRACT = receipt.contractAddress as string;

    const initializeTx = await this.relayContract
      .connect(this.relayerKey)
      .initialize(this.relayerKey.address, { gasLimit: 5000000 });

    const initializeReceipt = await initializeTx.wait(1);

    const installRelayerTx = await this.relayContract
      .connect(this.relayerKey)
      .installRelayer(this.relayerKey.address, { gasLimit: 5000000 });

    const installReceipt = await installRelayerTx.wait(1);

    const depositTx = await this.relayerKey.sendTransaction({
      to: this.relayContract.address,
      value: parseEther("1"),
      gasLimit: 100000
    });

    await depositTx.wait(1);
  }

  /**
   * For our mock, we just ignore the input for now
   * and return the contract's balance.
   * TODO: We can modify contract to keep track of deposits
   * @param signer User's signing key
   */
  async balance(user: string) {
    // Fetch onchain balance. We can keep track of relays() and just pretend
    // to decrement here.
    return await this.provider.getBalance(this.relayContract.address);
  }

  /**
   * Send relay transaction & then return a signed receipt
   * @param relayTransaction Signed relay transaction
   */
  async relay(
    relayTransaction: RelayTransaction
  ): Promise<RelayTransactionReceipt> {
    const relayWrapper = new UnsignedRelayTransactionWrapper(relayTransaction);

    const tx = await this.relayerKey.sendTransaction({
      to: this.ANYSENDER_RELAY_CONTRACT,
      data: relayWrapper.encodeForRelay(),
      gasLimit: 3000000
    });

    await tx.wait(1);

    // Compute signed receipt
    const id = AnySenderClient.relayTxId(relayTransaction); // sign a hash of the relay tx
    const signature = await this.relayerKey.signMessage(arrayify(id));

    const signedReceipt = {
      relayTransaction: relayTransaction,
      receiptSignature: signature,
      id: relayWrapper.id
    };

    // Return it
    return signedReceipt;
  }
}
