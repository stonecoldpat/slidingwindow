pragma experimental ABIEncoderV2;
pragma solidity ^0.6.2;

import "./BlockchainMock.sol";

contract SlidingWindow is BlockchainMock{

    /* 
     * Given a range of blocks, is this perido congested? 
     */
    function isPeriodCongested(uint startBlock, uint k, uint n, uint maximumBaseFee) public view returns (bool){
        require(n>=k, "N should be greater than (or equal to) K.");
        require(blocks.length>=n, "Total blocks should be greater than (or equal to) N.");

        uint totalCongested = 0;
        bool[] memory recordCongestion = new bool[](blocks.length - startBlock);
        
        for(uint i=startBlock; i < startBlock+n; i++) {
            // Keep a record of this block's congestion 
            recordCongestion[i] = isCongested(i, maximumBaseFee);
            
            // Sum of congestion (so far)
            if(recordCongestion[i]) {
                totalCongested = totalCongested + 1;
            }

            if(totalCongested>=k) {
                return true;
            }
        }

        // Activate the sliding window 
        for(uint i=startBlock+n; i<blocks.length; i++) {

            // Remove start of the window 
            if(recordCongestion[i-n]) {
                totalCongested = totalCongested - 1;
            }    

            // Keep a record of this block's congestion 
            recordCongestion[i] = isCongested(i, maximumBaseFee);

            // Add to the end of the window
            if(recordCongestion[i]) {
                totalCongested = totalCongested + 1; 
            }

            if(totalCongested>=k) {
                return true;
            }
        
        }

        return false;
    }
    
}