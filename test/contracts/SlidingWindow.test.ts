import "mocha";
import * as chai from "chai";
import { solidity, loadFixture } from "ethereum-waffle";
import { Provider, JsonRpcProvider } from "ethers/providers";
import { Wallet } from "ethers";
import { AuctionFactory } from "../../build/AuctionFactory";

const expect = chai.expect;
chai.use(solidity);

describe("SlidingWindow", () => {
  const fees = [5, 10, 10, 5, 5, 5, 5, 5, 10];
  const feesLong = [
    5, 5, 5, 10, 10, 5, 5, 5, 10, 5, 5, 10, 10, 10, 5, 10, 5, 10, 15, 10, 10,
  ];

  // Set up competition with an initial deposit of 1 ether
  async function setupFee(provider: Provider, [admin]: Wallet[]) {
    const auctionFactory = new AuctionFactory(admin);
    const auction = await auctionFactory.deploy();

    await auction.setBlocks(fees);

    return {
      provider,
      admin,
      auction,
    };
  }

  // Set up competition with an initial deposit of 1 ether
  async function setupFeesLong(provider: Provider, [admin]: Wallet[]) {
    const auctionFactory = new AuctionFactory(admin);
    const auction = await auctionFactory.deploy();

    await auction.setBlocks(feesLong);

    return {
      provider,
      admin,
      auction,
    };
  }

  // Time to start running through the test cases!
  it("Blocks set up", async () => {
    const { auction } = await loadFixture(setupFee);

    for (let i = 0; i < fees.length; i++) {
      const blockFee = await auction.blocks(i);
      expect(blockFee.eq(fees[i])).to.be.true;
    }
  }).timeout(5000000);

  // Time to start running through the test cases!
  it("Expecting all blocks to be congested. False.", async () => {
    const { auction } = await loadFixture(setupFee);

    const startBlock = 0;
    const k = 2;
    const n = 5;
    const congestionFee = 7;
    const congested = await auction.isPeriodCongested(
      startBlock,
      k,
      n,
      congestionFee
    );

    expect(congested).to.be.true;
  }).timeout(5000000);

  // Time to start running through the test cases!
  it("Identify congestion in the first N blocks.", async () => {
    const { auction } = await loadFixture(setupFee);

    const startBlock = 0;
    const k = fees.length;
    const n = fees.length;
    const congestionFee = 7;
    const congested = await auction.isPeriodCongested(
      startBlock,
      k,
      n,
      congestionFee
    );

    expect(congested).to.be.false;
  }).timeout(5000000);

  it("Expecting to find k=2 of n=2 blocks to be congested. True.", async () => {
    const { auction } = await loadFixture(setupFee);

    const startBlock = 0;
    const k = 2;
    const n = 2;
    const congestionFee = 7;
    const congested = await auction.isPeriodCongested(
      startBlock,
      k,
      n,
      congestionFee
    );

    expect(congested).to.be.true;
  }).timeout(5000000);

  it("Expecting to find k=3 of n=3 blocks to be congested. False.", async () => {
    const { auction } = await loadFixture(setupFee);

    const startBlock = 0;
    const k = 3;
    const n = 3;
    const congestionFee = 7;
    const congested = await auction.isPeriodCongested(
      startBlock,
      k,
      n,
      congestionFee
    );

    expect(congested).to.be.false;
  }).timeout(5000000);

  it("Expecting to find k=2 of n=7 blocks to be congested. True. (Fee long)", async () => {
    const { auction } = await loadFixture(setupFeesLong);

    const startBlock = 0;
    const k = 2;
    const n = 7;
    const congestionFee = 7;
    const congested = await auction.isPeriodCongested(
      startBlock,
      k,
      n,
      congestionFee
    );

    expect(congested).to.be.true;
  }).timeout(5000000);

  it("Expecting to find k=5 of n=7 blocks to be congested. True. (Fee long)", async () => {
    const { auction } = await loadFixture(setupFeesLong);

    const startBlock = 0;
    const k = 5;
    const n = 7;
    const congestionFee = 7;
    const congested = await auction.isPeriodCongested(
      startBlock,
      k,
      n,
      congestionFee
    );

    expect(congested).to.be.true;
  }).timeout(5000000);

  async function mineBlock(provider: JsonRpcProvider) {
    await provider.send("evm_mine", [1]);
  }
});
