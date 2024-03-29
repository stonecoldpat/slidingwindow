/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface SlidingWindowInterface extends Interface {
  functions: {
    blocks: TypedFunctionDescription<{ encode([]: [BigNumberish]): string }>;

    isCongested: TypedFunctionDescription<{
      encode([blockNumber, maximumBaseFee]: [
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    isPeriodCongested: TypedFunctionDescription<{
      encode([startBlock, k, n, maximumBaseFee]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    setBlocks: TypedFunctionDescription<{
      encode([fee]: [BigNumberish[]]): string;
    }>;
  };

  events: {};
}

export class SlidingWindow extends Contract {
  connect(signerOrProvider: Signer | Provider | string): SlidingWindow;
  attach(addressOrName: string): SlidingWindow;
  deployed(): Promise<SlidingWindow>;

  on(event: EventFilter | string, listener: Listener): SlidingWindow;
  once(event: EventFilter | string, listener: Listener): SlidingWindow;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): SlidingWindow;
  removeAllListeners(eventName: EventFilter | string): SlidingWindow;
  removeListener(eventName: any, listener: Listener): SlidingWindow;

  interface: SlidingWindowInterface;

  functions: {
    blocks(arg0: BigNumberish): Promise<BigNumber>;

    isCongested(
      blockNumber: BigNumberish,
      maximumBaseFee: BigNumberish
    ): Promise<boolean>;

    isPeriodCongested(
      startBlock: BigNumberish,
      k: BigNumberish,
      n: BigNumberish,
      maximumBaseFee: BigNumberish
    ): Promise<boolean>;

    setBlocks(
      fee: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  blocks(arg0: BigNumberish): Promise<BigNumber>;

  isCongested(
    blockNumber: BigNumberish,
    maximumBaseFee: BigNumberish
  ): Promise<boolean>;

  isPeriodCongested(
    startBlock: BigNumberish,
    k: BigNumberish,
    n: BigNumberish,
    maximumBaseFee: BigNumberish
  ): Promise<boolean>;

  setBlocks(
    fee: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    blocks(arg0: BigNumberish): Promise<BigNumber>;

    isCongested(
      blockNumber: BigNumberish,
      maximumBaseFee: BigNumberish
    ): Promise<BigNumber>;

    isPeriodCongested(
      startBlock: BigNumberish,
      k: BigNumberish,
      n: BigNumberish,
      maximumBaseFee: BigNumberish
    ): Promise<BigNumber>;

    setBlocks(fee: BigNumberish[]): Promise<BigNumber>;
  };
}
