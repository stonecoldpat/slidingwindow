pragma experimental ABIEncoderV2;
pragma solidity ^0.6.2;

import "./SlidingWindow.sol";

contract Auction is SlidingWindow {

    bool start = false;
    uint startBlock;
    uint k;
    uint n;
    uint gasPriceCeiling;

    function startAuction(uint _startBlock, uint _k, uint _n, uint _gasPriceCeiling) public {
        startBlock = _startBlock;
        k = _k;
        n = _n;
        gasPriceCeiling = _gasPriceCeiling; 
        start = true; // Kick-start the auction! 
    }

    function finaliseAuction() public returns(bool) {

        if(isPeriodCongested(startBlock, k, n,gasPriceCeiling)) {
            return false;
        } 

        // Finish the auction 
        return true;
    }
    
}