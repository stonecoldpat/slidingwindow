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

interface AuctionInterface extends Interface {
  functions: {
    blocks: TypedFunctionDescription<{ encode([]: [BigNumberish]): string }>;

    finaliseAuction: TypedFunctionDescription<{ encode([]: []): string }>;

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

    startAuction: TypedFunctionDescription<{
      encode([_startBlock, _k, _n, _gasPriceCeiling]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;
  };

  events: {};
}

export class Auction extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Auction;
  attach(addressOrName: string): Auction;
  deployed(): Promise<Auction>;

  on(event: EventFilter | string, listener: Listener): Auction;
  once(event: EventFilter | string, listener: Listener): Auction;
  addListener(eventName: EventFilter | string, listener: Listener): Auction;
  removeAllListeners(eventName: EventFilter | string): Auction;
  removeListener(eventName: any, listener: Listener): Auction;

  interface: AuctionInterface;

  functions: {
    blocks(arg0: BigNumberish): Promise<BigNumber>;

    finaliseAuction(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

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

    startAuction(
      _startBlock: BigNumberish,
      _k: BigNumberish,
      _n: BigNumberish,
      _gasPriceCeiling: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  blocks(arg0: BigNumberish): Promise<BigNumber>;

  finaliseAuction(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

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

  startAuction(
    _startBlock: BigNumberish,
    _k: BigNumberish,
    _n: BigNumberish,
    _gasPriceCeiling: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    blocks(arg0: BigNumberish): Promise<BigNumber>;

    finaliseAuction(): Promise<BigNumber>;

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

    startAuction(
      _startBlock: BigNumberish,
      _k: BigNumberish,
      _n: BigNumberish,
      _gasPriceCeiling: BigNumberish
    ): Promise<BigNumber>;
  };
}
